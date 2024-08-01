import { useState, useEffect } from 'react';
import Loading from './Loading';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);

    const fetchJobs = async () => {
        try {
            const response = await fetch(url);
            const jobs = await response.json();
            setJobs(jobs);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchJobs();
    }, []);

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    return (
        <section className="jobs-center">
            <BtnContainer
                jobs={jobs}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
            />
            <JobInfo jobs={jobs} currentItem={currentItem} />
        </section>
    );
};
export default App;

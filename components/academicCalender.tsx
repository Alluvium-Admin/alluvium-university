const AcademicCalender = () => {
    return (
        <>
            <table style={{border: '1px solid #BCBCBC'}}>
                <thead style={{background: '#DDE1E9'}}>
                    <tr style={{borderBottom: '1px solid #BCBCBC'}}>
                        <th className="col-6 p-3 fw-bold">Stages</th>
                        <th className="col-6 p-3 fw-bold" style={{borderLeft: '1px solid #BCBCBC'}}>Outcome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{borderBottom: '1px solid #BCBCBC'}} className=''>
                        <td className="col-6 p-3 fw-bold">Traineeship → 3 months</td>
                        <td className="col-6 p-3" style={{borderLeft: '1px solid #BCBCBC'}}><p>During the first three months into the AU program Alluvium shall provide all the necessary resources, to prepare you for the next stage of your journey. You will graduate into <span className="text-decoration-underline fw-bold">Apprenticeship</span> with adequate technical knowledge gained from completing practical sample projects as well as lead and support your new team mates.</p></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #BCBCBC'}}>
                        <td className="col-6 p-3 fw-bold">Apprenticeship → 9 months</td>
                        <td className="col-6 p-3" style={{borderLeft: '1px solid #BCBCBC'}}><p>As an <span className="text-decoration-underline fw-bold">Alluvium Apprentice</span>, you have gained technical skills needed and some business/management/consultancy skills required to solve real-life customer problems in part, and eventually <span className="fw-bold">end-to-end. → end-to-end what comes after this? has the sentence ended?</span></p></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #BCBCBC'}}>
                        <td className="col-6 p-3 fw-bold">Internship → 24 months</td>
                        <td className="col-6 p-3" style={{borderLeft: '1px solid #BCBCBC'}}><p>After a 12 months full of adventures and real-time success, you are to graduate into an <span className="fw-bold">Alluvium Intern</span> who is capable of handling customer accounts with oversight and support. At this point, you shall demonstrate your technical knowledge and most business/management/consultancy skills required to meet Alluviums&apos; customer requirements and you will be able lead your teammates.</p></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #BCBCBC'}}>
                        <td className="col-6 p-3 fw-bold">Traineeship → 3 months</td>
                        <td className="col-6 p-3" style={{borderLeft: '1px solid #BCBCBC'}}><p>At the end of your internship, you are to graduate as a fully confident <span className="text-decoration-underline fw-bold">Alluvium Consultant</span>, able to handle customer accounts <span className="fw-bold">independently</span> and supporting your fellow teammates.</p></td>
                    </tr>
                    {/* <tr style={{borderBottom: '1px solid #BCBCBC'}}>
                        <td className="col-6 p-3 fw-bold"></td>
                    </tr> */}
                </tbody>
            </table>
        </>
    )
}

export default AcademicCalender;
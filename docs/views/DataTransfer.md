### DataTransfer Demo
<hr />
<ClientOnly>
    <LockPage :token="token" :articleText="article_text" :articleUrl="article_url">
        <DataTransfer/>
    </LockPage>
</ClientOnly>

<script>
    import '@scss/global.scss'
    export default {
        name: 'DataTransferMD',
        data () {
            return {
                token: '1562835370187',
                article_text: 'JS拖动对象那些事',
                article_url: 'https://juejin.im/post/5d2d9fbff265da1bb67a4c1f'
            }
        }
    }
</script>
/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Failure_NetworkInputs */

const en_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The connection dropped. Your progress is kept: resume when you’re back online.`)
};

const es_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se cortó la conexión. Tu progreso se conserva: reanuda cuando vuelvas a estar en línea.`)
};

const de_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Verbindung ist abgebrochen. Dein Fortschritt bleibt erhalten: Setze fort, sobald du wieder online bist.`)
};

const fr_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La connexion a coupé. Votre progression est conservée : reprenez une fois de retour en ligne.`)
};

const it_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La connessione è caduta. I progressi sono conservati: riprendi quando torni online.`)
};

const nl_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De verbinding viel weg. Je voortgang blijft bewaard: hervat zodra je weer online bent.`)
};

const pl_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połączenie zostało przerwane. Postęp jest zachowany: wznów, gdy wrócisz do sieci.`)
};

const pt_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A conexão caiu. Seu progresso foi mantido: retome quando estiver on-line de novo.`)
};

const ru_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Связь оборвалась. Прогресс сохранён: продолжите, когда снова будете в сети.`)
};

const sv_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anslutningen bröts. Förloppet sparas: återuppta när du är online igen.`)
};

const tr_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı koptu. İlerlemen korunuyor: tekrar çevrimiçi olunca devam et.`)
};

const zh_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接中断，进度已保留：恢复联网后继续即可。`)
};

const ja_upload_failure_network = /** @type {(inputs: Upload_Failure_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続が切れました。進行状況は保持されています。オンラインに戻ったら再開してください。`)
};

/**
* | output |
* | --- |
* | "The connection dropped. Your progress is kept: resume when you’re back online." |
*
* @param {Upload_Failure_NetworkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_failure_network = /** @type {((inputs?: Upload_Failure_NetworkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Failure_NetworkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_failure_network(inputs)
	if (locale === "de") return de_upload_failure_network(inputs)
	if (locale === "fr") return fr_upload_failure_network(inputs)
	if (locale === "it") return it_upload_failure_network(inputs)
	if (locale === "nl") return nl_upload_failure_network(inputs)
	if (locale === "pl") return pl_upload_failure_network(inputs)
	if (locale === "pt") return pt_upload_failure_network(inputs)
	if (locale === "ru") return ru_upload_failure_network(inputs)
	if (locale === "sv") return sv_upload_failure_network(inputs)
	if (locale === "tr") return tr_upload_failure_network(inputs)
	if (locale === "zh") return zh_upload_failure_network(inputs)
	if (locale === "ja") return ja_upload_failure_network(inputs)
	return en_upload_failure_network(inputs)
});

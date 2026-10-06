/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Submit_ReadyInputs */

const en_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready. Moderation reviews first publications; trusted creators go live right away.`)
};

const es_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listo. Moderación revisa las primeras publicaciones; los creadores de confianza salen al momento.`)
};

const de_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereit. Erste Veröffentlichungen prüft die Moderation; vertrauenswürdige Creator gehen sofort online.`)
};

const fr_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêt. La modération examine les premières publications ; les créateurs de confiance sont publiés tout de suite.`)
};

const it_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronto. La moderazione esamina le prime pubblicazioni; i creatori affidabili vanno online subito.`)
};

const nl_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klaar. Moderatie controleert eerste publicaties; vertrouwde makers gaan meteen live.`)
};

const pl_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gotowe. Pierwsze publikacje sprawdza moderacja; zaufani twórcy publikują od razu.`)
};

const pt_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronto. A moderação revisa as primeiras publicações; criadores de confiança publicam na hora.`)
};

const ru_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готово. Первые публикации проверяет модерация; у доверенных авторов они выходят сразу.`)
};

const sv_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klart. Modereringen granskar första publiceringar; betrodda skapare publiceras direkt.`)
};

const tr_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hazır. İlk yayınları moderasyon inceler; güvenilir yapımcılar hemen yayına girer.`)
};

const zh_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`准备就绪。首次发布由版主审核；受信任的创作者会立即发布。`)
};

const ja_upload_submit_ready = /** @type {(inputs: Upload_Submit_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`準備完了。初回の公開はモデレーションが確認します。信頼済みクリエイターはすぐに公開されます。`)
};

/**
* | output |
* | --- |
* | "Ready. Moderation reviews first publications; trusted creators go live right away." |
*
* @param {Upload_Submit_ReadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_submit_ready = /** @type {((inputs?: Upload_Submit_ReadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Submit_ReadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_submit_ready(inputs)
	if (locale === "de") return de_upload_submit_ready(inputs)
	if (locale === "fr") return fr_upload_submit_ready(inputs)
	if (locale === "it") return it_upload_submit_ready(inputs)
	if (locale === "nl") return nl_upload_submit_ready(inputs)
	if (locale === "pl") return pl_upload_submit_ready(inputs)
	if (locale === "pt") return pt_upload_submit_ready(inputs)
	if (locale === "ru") return ru_upload_submit_ready(inputs)
	if (locale === "sv") return sv_upload_submit_ready(inputs)
	if (locale === "tr") return tr_upload_submit_ready(inputs)
	if (locale === "zh") return zh_upload_submit_ready(inputs)
	if (locale === "ja") return ja_upload_submit_ready(inputs)
	return en_upload_submit_ready(inputs)
});

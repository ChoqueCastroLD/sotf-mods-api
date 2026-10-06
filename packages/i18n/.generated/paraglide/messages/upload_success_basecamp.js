/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Success_BasecampInputs */

const en_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the dashboard`)
};

const es_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al panel`)
};

const de_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zum Dashboard`)
};

const fr_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour au tableau de bord`)
};

const it_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna alla dashboard`)
};

const nl_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar het dashboard`)
};

const pl_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do panelu`)
};

const pt_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao painel`)
};

const ru_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернуться на панель`)
};

const sv_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till översikten`)
};

const tr_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panele dön`)
};

const zh_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回控制台`)
};

const ja_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボードに戻る`)
};

/**
* | output |
* | --- |
* | "Back to the dashboard" |
*
* @param {Upload_Success_BasecampInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_basecamp = /** @type {((inputs?: Upload_Success_BasecampInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_BasecampInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_basecamp(inputs)
	if (locale === "de") return de_upload_success_basecamp(inputs)
	if (locale === "fr") return fr_upload_success_basecamp(inputs)
	if (locale === "it") return it_upload_success_basecamp(inputs)
	if (locale === "nl") return nl_upload_success_basecamp(inputs)
	if (locale === "pl") return pl_upload_success_basecamp(inputs)
	if (locale === "pt") return pt_upload_success_basecamp(inputs)
	if (locale === "ru") return ru_upload_success_basecamp(inputs)
	if (locale === "sv") return sv_upload_success_basecamp(inputs)
	if (locale === "tr") return tr_upload_success_basecamp(inputs)
	if (locale === "zh") return zh_upload_success_basecamp(inputs)
	if (locale === "ja") return ja_upload_success_basecamp(inputs)
	return en_upload_success_basecamp(inputs)
});

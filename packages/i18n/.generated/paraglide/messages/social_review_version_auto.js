/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Version_AutoInputs */

const en_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The last one I downloaded`)
};

const es_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La última que descargué`)
};

const de_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die zuletzt heruntergeladene`)
};

const fr_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La dernière que j’ai téléchargée`)
};

const it_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’ultima che ho scaricato`)
};

const nl_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De laatste die ik heb gedownload`)
};

const pl_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnio pobrana`)
};

const pt_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A última que baixei`)
};

const ru_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя скачанная`)
};

const sv_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den senaste jag laddade ner`)
};

const tr_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son indirdiğim`)
};

const zh_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我最后下载的版本`)
};

const ja_social_review_version_auto = /** @type {(inputs: Social_Review_Version_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最後にダウンロードしたもの`)
};

/**
* | output |
* | --- |
* | "The last one I downloaded" |
*
* @param {Social_Review_Version_AutoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_version_auto = /** @type {((inputs?: Social_Review_Version_AutoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Version_AutoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_version_auto(inputs)
	if (locale === "de") return de_social_review_version_auto(inputs)
	if (locale === "fr") return fr_social_review_version_auto(inputs)
	if (locale === "it") return it_social_review_version_auto(inputs)
	if (locale === "nl") return nl_social_review_version_auto(inputs)
	if (locale === "pl") return pl_social_review_version_auto(inputs)
	if (locale === "pt") return pt_social_review_version_auto(inputs)
	if (locale === "ru") return ru_social_review_version_auto(inputs)
	if (locale === "sv") return sv_social_review_version_auto(inputs)
	if (locale === "tr") return tr_social_review_version_auto(inputs)
	if (locale === "zh") return zh_social_review_version_auto(inputs)
	if (locale === "ja") return ja_social_review_version_auto(inputs)
	return en_social_review_version_auto(inputs)
});

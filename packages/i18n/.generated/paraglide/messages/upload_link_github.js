/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Link_GithubInputs */

const en_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const es_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const de_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const fr_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const it_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const nl_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const pl_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const pt_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const ru_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const sv_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const tr_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const zh_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const ja_upload_link_github = /** @type {(inputs: Upload_Link_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

/**
* | output |
* | --- |
* | "GitHub" |
*
* @param {Upload_Link_GithubInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_link_github = /** @type {((inputs?: Upload_Link_GithubInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Link_GithubInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_link_github(inputs)
	if (locale === "de") return de_upload_link_github(inputs)
	if (locale === "fr") return fr_upload_link_github(inputs)
	if (locale === "it") return it_upload_link_github(inputs)
	if (locale === "nl") return nl_upload_link_github(inputs)
	if (locale === "pl") return pl_upload_link_github(inputs)
	if (locale === "pt") return pt_upload_link_github(inputs)
	if (locale === "ru") return ru_upload_link_github(inputs)
	if (locale === "sv") return sv_upload_link_github(inputs)
	if (locale === "tr") return tr_upload_link_github(inputs)
	if (locale === "zh") return zh_upload_link_github(inputs)
	if (locale === "ja") return ja_upload_link_github(inputs)
	return en_upload_link_github(inputs)
});

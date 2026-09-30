/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_PlatformInputs */

const en_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The platform must be Client, Server or Universal.`)
};

const es_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La plataforma debe ser Client, Server o Universal.`)
};

const de_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Plattform muss Client, Server oder Universal sein.`)
};

const fr_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La plateforme doit être Client, Server ou Universal.`)
};

const it_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La piattaforma deve essere Client, Server o Universal.`)
};

const nl_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het platform moet Client, Server of Universal zijn.`)
};

const pl_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platforma musi mieć wartość Client, Server lub Universal.`)
};

const pt_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A plataforma precisa ser Client, Server ou Universal.`)
};

const ru_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Платформа должна быть Client, Server или Universal.`)
};

const sv_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattformen måste vara Client, Server eller Universal.`)
};

const tr_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform Client, Server ya da Universal olmalı.`)
};

const zh_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平台必须是 Client、Server 或 Universal。`)
};

const ja_upload_issue_invalid_platform = /** @type {(inputs: Upload_Issue_Invalid_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラットフォームは Client、Server、Universal のいずれかにしてください。`)
};

/**
* | output |
* | --- |
* | "The platform must be Client, Server or Universal." |
*
* @param {Upload_Issue_Invalid_PlatformInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_platform = /** @type {((inputs?: Upload_Issue_Invalid_PlatformInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_PlatformInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_platform(inputs)
	if (locale === "de") return de_upload_issue_invalid_platform(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_platform(inputs)
	if (locale === "it") return it_upload_issue_invalid_platform(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_platform(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_platform(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_platform(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_platform(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_platform(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_platform(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_platform(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_platform(inputs)
	return en_upload_issue_invalid_platform(inputs)
});

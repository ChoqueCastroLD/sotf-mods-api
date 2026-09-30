/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Action_Upload_BuildInputs */

const en_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share a build`)
};

const es_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartir un build`)
};

const de_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build teilen`)
};

const fr_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partager un build`)
};

const it_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi una build`)
};

const nl_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een build delen`)
};

const pl_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij build`)
};

const pt_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartilhar uma build`)
};

const ru_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделиться постройкой`)
};

const sv_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela ett bygge`)
};

const tr_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı paylaş`)
};

const zh_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享建筑`)
};

const ja_cmdk_action_upload_build = /** @type {(inputs: Cmdk_Action_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築を共有`)
};

/**
* | output |
* | --- |
* | "Share a build" |
*
* @param {Cmdk_Action_Upload_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_action_upload_build = /** @type {((inputs?: Cmdk_Action_Upload_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Action_Upload_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_action_upload_build(inputs)
	if (locale === "de") return de_cmdk_action_upload_build(inputs)
	if (locale === "fr") return fr_cmdk_action_upload_build(inputs)
	if (locale === "it") return it_cmdk_action_upload_build(inputs)
	if (locale === "nl") return nl_cmdk_action_upload_build(inputs)
	if (locale === "pl") return pl_cmdk_action_upload_build(inputs)
	if (locale === "pt") return pt_cmdk_action_upload_build(inputs)
	if (locale === "ru") return ru_cmdk_action_upload_build(inputs)
	if (locale === "sv") return sv_cmdk_action_upload_build(inputs)
	if (locale === "tr") return tr_cmdk_action_upload_build(inputs)
	if (locale === "zh") return zh_cmdk_action_upload_build(inputs)
	if (locale === "ja") return ja_cmdk_action_upload_build(inputs)
	return en_cmdk_action_upload_build(inputs)
});

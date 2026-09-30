/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Error_BannerInputs */

const en_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The banner must be an https:// link.`)
};

const es_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El banner debe ser un enlace https://.`)
};

const de_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Banner muss ein https://-Link sein.`)
};

const fr_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La bannière doit être un lien https://.`)
};

const it_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il banner deve essere un link https://.`)
};

const nl_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De banner moet een https://-link zijn.`)
};

const pl_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baner musi być linkiem https://.`)
};

const pt_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O banner deve ser um link https://.`)
};

const ru_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Баннер должен быть ссылкой https://.`)
};

const sv_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bannern måste vara en https://-länk.`)
};

const tr_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner bir https:// bağlantısı olmalı.`)
};

const zh_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`横幅必须是 https:// 链接。`)
};

const ja_jams_editor_error_banner = /** @type {(inputs: Jams_Editor_Error_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バナーは https:// のリンクにしてください。`)
};

/**
* | output |
* | --- |
* | "The banner must be an https:// link." |
*
* @param {Jams_Editor_Error_BannerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_error_banner = /** @type {((inputs?: Jams_Editor_Error_BannerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_BannerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_error_banner(inputs)
	if (locale === "de") return de_jams_editor_error_banner(inputs)
	if (locale === "fr") return fr_jams_editor_error_banner(inputs)
	if (locale === "it") return it_jams_editor_error_banner(inputs)
	if (locale === "nl") return nl_jams_editor_error_banner(inputs)
	if (locale === "pl") return pl_jams_editor_error_banner(inputs)
	if (locale === "pt") return pt_jams_editor_error_banner(inputs)
	if (locale === "ru") return ru_jams_editor_error_banner(inputs)
	if (locale === "sv") return sv_jams_editor_error_banner(inputs)
	if (locale === "tr") return tr_jams_editor_error_banner(inputs)
	if (locale === "zh") return zh_jams_editor_error_banner(inputs)
	if (locale === "ja") return ja_jams_editor_error_banner(inputs)
	return en_jams_editor_error_banner(inputs)
});

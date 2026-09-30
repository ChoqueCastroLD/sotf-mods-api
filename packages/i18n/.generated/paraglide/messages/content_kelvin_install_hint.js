/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Install_HintInputs */

const en_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New to mods? Start with the guide:`)
};

const es_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Nuevo en los mods? Empieza por la guía:`)
};

const de_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu bei Mods? Fang mit der Anleitung an:`)
};

const fr_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau dans les mods ? Commencez par le guide :`)
};

const it_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo alle mod? Inizia dalla guida:`)
};

const nl_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw met mods? Begin met de gids:`)
};

const pl_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy raz z modami? Zacznij od poradnika:`)
};

const pt_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo com mods? Comece pelo guia:`)
};

const ru_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Впервые с модами? Начните с руководства:`)
};

const sv_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny med moddar? Börja med guiden:`)
};

const tr_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarda yeni misin? Rehberle başla:`)
};

const zh_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`第一次用模组？先看指南：`)
};

const ja_content_kelvin_install_hint = /** @type {(inputs: Content_Kelvin_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod は初めて？まずはガイドから：`)
};

/**
* | output |
* | --- |
* | "New to mods? Start with the guide:" |
*
* @param {Content_Kelvin_Install_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_install_hint = /** @type {((inputs?: Content_Kelvin_Install_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Install_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_install_hint(inputs)
	if (locale === "de") return de_content_kelvin_install_hint(inputs)
	if (locale === "fr") return fr_content_kelvin_install_hint(inputs)
	if (locale === "it") return it_content_kelvin_install_hint(inputs)
	if (locale === "nl") return nl_content_kelvin_install_hint(inputs)
	if (locale === "pl") return pl_content_kelvin_install_hint(inputs)
	if (locale === "pt") return pt_content_kelvin_install_hint(inputs)
	if (locale === "ru") return ru_content_kelvin_install_hint(inputs)
	if (locale === "sv") return sv_content_kelvin_install_hint(inputs)
	if (locale === "tr") return tr_content_kelvin_install_hint(inputs)
	if (locale === "zh") return zh_content_kelvin_install_hint(inputs)
	if (locale === "ja") return ja_content_kelvin_install_hint(inputs)
	return en_content_kelvin_install_hint(inputs)
});

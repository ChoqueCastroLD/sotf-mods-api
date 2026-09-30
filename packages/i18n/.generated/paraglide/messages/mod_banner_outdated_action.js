/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Outdated_ActionInputs */

const en_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tried it? Report back`)
};

const es_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Lo probaste? Cuéntalo`)
};

const de_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausprobiert? Berichte`)
};

const fr_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testé ? Dites-le`)
};

const it_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’hai provata? Faccelo sapere`)
};

const nl_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geprobeerd? Laat het weten`)
};

const pl_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testowałeś? Daj znać`)
};

const pt_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testou? Conte pra gente`)
};

const ru_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пробовали? Расскажите`)
};

const sv_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testat? Berätta`)
};

const tr_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denedin mi? Bildir`)
};

const zh_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`试过了？告诉大家`)
};

const ja_mod_banner_outdated_action = /** @type {(inputs: Mod_Banner_Outdated_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`試した？報告しよう`)
};

/**
* | output |
* | --- |
* | "Tried it? Report back" |
*
* @param {Mod_Banner_Outdated_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_outdated_action = /** @type {((inputs?: Mod_Banner_Outdated_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Outdated_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_outdated_action(inputs)
	if (locale === "de") return de_mod_banner_outdated_action(inputs)
	if (locale === "fr") return fr_mod_banner_outdated_action(inputs)
	if (locale === "it") return it_mod_banner_outdated_action(inputs)
	if (locale === "nl") return nl_mod_banner_outdated_action(inputs)
	if (locale === "pl") return pl_mod_banner_outdated_action(inputs)
	if (locale === "pt") return pt_mod_banner_outdated_action(inputs)
	if (locale === "ru") return ru_mod_banner_outdated_action(inputs)
	if (locale === "sv") return sv_mod_banner_outdated_action(inputs)
	if (locale === "tr") return tr_mod_banner_outdated_action(inputs)
	if (locale === "zh") return zh_mod_banner_outdated_action(inputs)
	if (locale === "ja") return ja_mod_banner_outdated_action(inputs)
	return en_mod_banner_outdated_action(inputs)
});

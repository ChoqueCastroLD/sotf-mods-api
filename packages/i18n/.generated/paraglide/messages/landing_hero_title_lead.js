/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Hero_Title_LeadInputs */

const en_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods for the island.`)
};

const es_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods para la isla.`)
};

const de_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods für die Insel.`)
};

const fr_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods pour l’île.`)
};

const it_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod per l’isola.`)
};

const nl_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods voor het eiland.`)
};

const pl_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody na wyspę.`)
};

const pt_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods para a ilha.`)
};

const ru_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для острова.`)
};

const sv_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar för ön.`)
};

const tr_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ada için modlar.`)
};

const zh_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为这座岛打造的模组，`)
};

const ja_landing_hero_title_lead = /** @type {(inputs: Landing_Hero_Title_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島のためのMOD。`)
};

/**
* | output |
* | --- |
* | "Mods for the island." |
*
* @param {Landing_Hero_Title_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hero_title_lead = /** @type {((inputs?: Landing_Hero_Title_LeadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hero_Title_LeadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hero_title_lead(inputs)
	if (locale === "de") return de_landing_hero_title_lead(inputs)
	if (locale === "fr") return fr_landing_hero_title_lead(inputs)
	if (locale === "it") return it_landing_hero_title_lead(inputs)
	if (locale === "nl") return nl_landing_hero_title_lead(inputs)
	if (locale === "pl") return pl_landing_hero_title_lead(inputs)
	if (locale === "pt") return pt_landing_hero_title_lead(inputs)
	if (locale === "ru") return ru_landing_hero_title_lead(inputs)
	if (locale === "sv") return sv_landing_hero_title_lead(inputs)
	if (locale === "tr") return tr_landing_hero_title_lead(inputs)
	if (locale === "zh") return zh_landing_hero_title_lead(inputs)
	if (locale === "ja") return ja_landing_hero_title_lead(inputs)
	return en_landing_hero_title_lead(inputs)
});

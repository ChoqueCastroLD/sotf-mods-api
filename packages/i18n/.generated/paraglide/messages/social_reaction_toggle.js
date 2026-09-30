/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reaction: NonNullable<unknown>, count: NonNullable<unknown> }} Social_Reaction_ToggleInputs */

const en_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} person`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} people`)
	
};

const es_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} persona`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} personas`)
	
};

const de_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} Person`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} Personen`)
	
};

const fr_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction} : ${count__number} personne`);
	return /** @type {LocalizedString} */ (`${i?.reaction} : ${count__number} personnes`)
	
};

const it_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} persona`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} persone`)
	
};

const nl_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} persoon`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} personen`)
	
};

const pl_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} osoba`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} osoby`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} osób`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} osoby`)
	
};

const pt_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} pessoa`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} pessoas`)
	
};

const ru_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} человек`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} человека`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} человек`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} человека`)
	
};

const sv_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} person`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} personer`)
	
};

const tr_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} kişi`);
	return /** @type {LocalizedString} */ (`${i?.reaction}: ${count__number} kişi`)
	
};

const zh_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.reaction}：${count__number} 人`)
};

const ja_social_reaction_toggle = /** @type {(inputs: Social_Reaction_ToggleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.reaction}：${count__number} 人`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{reaction}: {count__number} person" |
* | * | "{reaction}: {count__number} people" |
*
* @param {Social_Reaction_ToggleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_toggle = /** @type {((inputs: Social_Reaction_ToggleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_ToggleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_toggle(inputs)
	if (locale === "de") return de_social_reaction_toggle(inputs)
	if (locale === "fr") return fr_social_reaction_toggle(inputs)
	if (locale === "it") return it_social_reaction_toggle(inputs)
	if (locale === "nl") return nl_social_reaction_toggle(inputs)
	if (locale === "pl") return pl_social_reaction_toggle(inputs)
	if (locale === "pt") return pt_social_reaction_toggle(inputs)
	if (locale === "ru") return ru_social_reaction_toggle(inputs)
	if (locale === "sv") return sv_social_reaction_toggle(inputs)
	if (locale === "tr") return tr_social_reaction_toggle(inputs)
	if (locale === "zh") return zh_social_reaction_toggle(inputs)
	if (locale === "ja") return ja_social_reaction_toggle(inputs)
	return en_social_reaction_toggle(inputs)
});

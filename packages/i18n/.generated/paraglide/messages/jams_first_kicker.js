/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_KickerInputs */

const en_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First jam coming soon`)
};

const es_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronto, el primer jam`)
};

const de_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der erste Jam kommt bald`)
};

const fr_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le premier jam arrive`)
};

const it_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il primo jam in arrivo`)
};

const nl_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De eerste jam komt eraan`)
};

const pl_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy jam już wkrótce`)
};

const pt_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O primeiro jam vem aí`)
};

const ru_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скоро первый джем`)
};

const sv_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första jammen kommer snart`)
};

const tr_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk jam yakında`)
};

const zh_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首届 Jam 即将到来`)
};

const ja_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`初のジャム、まもなく`)
};

/**
* | output |
* | --- |
* | "First jam coming soon" |
*
* @param {Jams_First_KickerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_kicker = /** @type {((inputs?: Jams_First_KickerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_KickerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_kicker(inputs)
	if (locale === "de") return de_jams_first_kicker(inputs)
	if (locale === "fr") return fr_jams_first_kicker(inputs)
	if (locale === "it") return it_jams_first_kicker(inputs)
	if (locale === "nl") return nl_jams_first_kicker(inputs)
	if (locale === "pl") return pl_jams_first_kicker(inputs)
	if (locale === "pt") return pt_jams_first_kicker(inputs)
	if (locale === "ru") return ru_jams_first_kicker(inputs)
	if (locale === "sv") return sv_jams_first_kicker(inputs)
	if (locale === "tr") return tr_jams_first_kicker(inputs)
	if (locale === "zh") return zh_jams_first_kicker(inputs)
	if (locale === "ja") return ja_jams_first_kicker(inputs)
	return en_jams_first_kicker(inputs)
});

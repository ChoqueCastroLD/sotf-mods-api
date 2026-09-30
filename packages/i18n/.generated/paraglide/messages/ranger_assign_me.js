/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Assign_MeInputs */

const en_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assign to me`)
};

const es_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asignármelo`)
};

const de_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mir zuweisen`)
};

const fr_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Me l’attribuer`)
};

const it_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assegna a me`)
};

const nl_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aan mij toewijzen`)
};

const pl_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przypisz do mnie`)
};

const pt_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atribuir a mim`)
};

const ru_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Взять себе`)
};

const sv_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tilldela mig`)
};

const tr_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bana ata`)
};

const zh_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分配给我`)
};

const ja_ranger_assign_me = /** @type {(inputs: Ranger_Assign_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分に割り当て`)
};

/**
* | output |
* | --- |
* | "Assign to me" |
*
* @param {Ranger_Assign_MeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_assign_me = /** @type {((inputs?: Ranger_Assign_MeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Assign_MeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_assign_me(inputs)
	if (locale === "de") return de_ranger_assign_me(inputs)
	if (locale === "fr") return fr_ranger_assign_me(inputs)
	if (locale === "it") return it_ranger_assign_me(inputs)
	if (locale === "nl") return nl_ranger_assign_me(inputs)
	if (locale === "pl") return pl_ranger_assign_me(inputs)
	if (locale === "pt") return pt_ranger_assign_me(inputs)
	if (locale === "ru") return ru_ranger_assign_me(inputs)
	if (locale === "sv") return sv_ranger_assign_me(inputs)
	if (locale === "tr") return tr_ranger_assign_me(inputs)
	if (locale === "zh") return zh_ranger_assign_me(inputs)
	if (locale === "ja") return ja_ranger_assign_me(inputs)
	return en_ranger_assign_me(inputs)
});

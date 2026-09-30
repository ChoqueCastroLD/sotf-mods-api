/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_RequiredInputs */

const en_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This field is required.`)
};

const es_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este campo es obligatorio.`)
};

const de_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Feld ist erforderlich.`)
};

const fr_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce champ est obligatoire.`)
};

const it_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo campo è obbligatorio.`)
};

const nl_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit veld is verplicht.`)
};

const pl_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To pole jest wymagane.`)
};

const pt_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este campo é obrigatório.`)
};

const ru_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обязательное поле.`)
};

const sv_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här fältet är obligatoriskt.`)
};

const tr_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu alan zorunlu.`)
};

const zh_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此字段必填。`)
};

const ja_mod_knowledge_required = /** @type {(inputs: Mod_Knowledge_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この項目は必須です。`)
};

/**
* | output |
* | --- |
* | "This field is required." |
*
* @param {Mod_Knowledge_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_required = /** @type {((inputs?: Mod_Knowledge_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_required(inputs)
	if (locale === "de") return de_mod_knowledge_required(inputs)
	if (locale === "fr") return fr_mod_knowledge_required(inputs)
	if (locale === "it") return it_mod_knowledge_required(inputs)
	if (locale === "nl") return nl_mod_knowledge_required(inputs)
	if (locale === "pl") return pl_mod_knowledge_required(inputs)
	if (locale === "pt") return pt_mod_knowledge_required(inputs)
	if (locale === "ru") return ru_mod_knowledge_required(inputs)
	if (locale === "sv") return sv_mod_knowledge_required(inputs)
	if (locale === "tr") return tr_mod_knowledge_required(inputs)
	if (locale === "zh") return zh_mod_knowledge_required(inputs)
	if (locale === "ja") return ja_mod_knowledge_required(inputs)
	return en_mod_knowledge_required(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Action_CreateInputs */

const en_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a kit`)
};

const es_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear un kit`)
};

const de_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit erstellen`)
};

const fr_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer un kit`)
};

const it_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un kit`)
};

const nl_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit maken`)
};

const pl_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz zestaw`)
};

const pt_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar um kit`)
};

const ru_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать набор`)
};

const sv_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa ett kit`)
};

const tr_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit oluştur`)
};

const zh_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建套装`)
};

const ja_kits_action_create = /** @type {(inputs: Kits_Action_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを作成`)
};

/**
* | output |
* | --- |
* | "Create a kit" |
*
* @param {Kits_Action_CreateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_action_create = /** @type {((inputs?: Kits_Action_CreateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Action_CreateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_action_create(inputs)
	if (locale === "de") return de_kits_action_create(inputs)
	if (locale === "fr") return fr_kits_action_create(inputs)
	if (locale === "it") return it_kits_action_create(inputs)
	if (locale === "nl") return nl_kits_action_create(inputs)
	if (locale === "pl") return pl_kits_action_create(inputs)
	if (locale === "pt") return pt_kits_action_create(inputs)
	if (locale === "ru") return ru_kits_action_create(inputs)
	if (locale === "sv") return sv_kits_action_create(inputs)
	if (locale === "tr") return tr_kits_action_create(inputs)
	if (locale === "zh") return zh_kits_action_create(inputs)
	if (locale === "ja") return ja_kits_action_create(inputs)
	return en_kits_action_create(inputs)
});

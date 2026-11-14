/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_CreateInputs */

const en_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a modpack`)
};

const es_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear un modpack`)
};

const de_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack erstellen`)
};

const fr_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer un modpack`)
};

const it_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un modpack`)
};

const nl_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack maken`)
};

const pl_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz modpack`)
};

const pt_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar um modpack`)
};

const ru_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать модпак`)
};

const sv_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa ett modpaket`)
};

const tr_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketi oluştur`)
};

const zh_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建整合包`)
};

const ja_modpacks_create = /** @type {(inputs: Modpacks_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを作成`)
};

/**
* | output |
* | --- |
* | "Create a modpack" |
*
* @param {Modpacks_CreateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_create = /** @type {((inputs?: Modpacks_CreateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_CreateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_create(inputs)
	if (locale === "de") return de_modpacks_create(inputs)
	if (locale === "fr") return fr_modpacks_create(inputs)
	if (locale === "it") return it_modpacks_create(inputs)
	if (locale === "nl") return nl_modpacks_create(inputs)
	if (locale === "pl") return pl_modpacks_create(inputs)
	if (locale === "pt") return pt_modpacks_create(inputs)
	if (locale === "ru") return ru_modpacks_create(inputs)
	if (locale === "sv") return sv_modpacks_create(inputs)
	if (locale === "tr") return tr_modpacks_create(inputs)
	if (locale === "zh") return zh_modpacks_create(inputs)
	if (locale === "ja") return ja_modpacks_create(inputs)
	return en_modpacks_create(inputs)
});

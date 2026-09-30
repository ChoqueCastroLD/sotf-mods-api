/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Create_SubmitInputs */

const en_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create kit`)
};

const es_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear kit`)
};

const de_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit erstellen`)
};

const fr_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer le kit`)
};

const it_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea kit`)
};

const nl_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit maken`)
};

const pl_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz zestaw`)
};

const pt_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar kit`)
};

const ru_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать набор`)
};

const sv_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa kit`)
};

const tr_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiti oluştur`)
};

const zh_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建套装`)
};

const ja_kits_create_submit = /** @type {(inputs: Kits_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを作成`)
};

/**
* | output |
* | --- |
* | "Create kit" |
*
* @param {Kits_Create_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_create_submit = /** @type {((inputs?: Kits_Create_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Create_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_create_submit(inputs)
	if (locale === "de") return de_kits_create_submit(inputs)
	if (locale === "fr") return fr_kits_create_submit(inputs)
	if (locale === "it") return it_kits_create_submit(inputs)
	if (locale === "nl") return nl_kits_create_submit(inputs)
	if (locale === "pl") return pl_kits_create_submit(inputs)
	if (locale === "pt") return pt_kits_create_submit(inputs)
	if (locale === "ru") return ru_kits_create_submit(inputs)
	if (locale === "sv") return sv_kits_create_submit(inputs)
	if (locale === "tr") return tr_kits_create_submit(inputs)
	if (locale === "zh") return zh_kits_create_submit(inputs)
	if (locale === "ja") return ja_kits_create_submit(inputs)
	return en_kits_create_submit(inputs)
});

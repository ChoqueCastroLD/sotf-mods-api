/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_CreateInputs */

const en_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create draft`)
};

const es_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear borrador`)
};

const de_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf erstellen`)
};

const fr_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer le brouillon`)
};

const it_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea bozza`)
};

const nl_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concept maken`)
};

const pl_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz szkic`)
};

const pt_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar rascunho`)
};

const ru_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать черновик`)
};

const sv_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa utkast`)
};

const tr_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak oluştur`)
};

const zh_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建草稿`)
};

const ja_jams_admin_create = /** @type {(inputs: Jams_Admin_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きを作成`)
};

/**
* | output |
* | --- |
* | "Create draft" |
*
* @param {Jams_Admin_CreateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_create = /** @type {((inputs?: Jams_Admin_CreateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_CreateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_create(inputs)
	if (locale === "de") return de_jams_admin_create(inputs)
	if (locale === "fr") return fr_jams_admin_create(inputs)
	if (locale === "it") return it_jams_admin_create(inputs)
	if (locale === "nl") return nl_jams_admin_create(inputs)
	if (locale === "pl") return pl_jams_admin_create(inputs)
	if (locale === "pt") return pt_jams_admin_create(inputs)
	if (locale === "ru") return ru_jams_admin_create(inputs)
	if (locale === "sv") return sv_jams_admin_create(inputs)
	if (locale === "tr") return tr_jams_admin_create(inputs)
	if (locale === "zh") return zh_jams_admin_create(inputs)
	if (locale === "ja") return ja_jams_admin_create(inputs)
	return en_jams_admin_create(inputs)
});

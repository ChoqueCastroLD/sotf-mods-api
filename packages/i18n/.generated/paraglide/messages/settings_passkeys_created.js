/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Settings_Passkeys_CreatedInputs */

const en_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Added ${i?.date}`)
};

const es_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Añadida el ${i?.date}`)
};

const de_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hinzugefügt am ${i?.date}`)
};

const fr_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ajoutée le ${i?.date}`)
};

const it_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiunta il ${i?.date}`)
};

const nl_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toegevoegd op ${i?.date}`)
};

const pl_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodano ${i?.date}`)
};

const pt_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adicionada em ${i?.date}`)
};

const ru_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавлен ${i?.date}`)
};

const sv_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tillagd ${i?.date}`)
};

const tr_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde eklendi`)
};

const zh_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`添加于 ${i?.date}`)
};

const ja_settings_passkeys_created = /** @type {(inputs: Settings_Passkeys_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に追加`)
};

/**
* | output |
* | --- |
* | "Added {date}" |
*
* @param {Settings_Passkeys_CreatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_created = /** @type {((inputs: Settings_Passkeys_CreatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_CreatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_created(inputs)
	if (locale === "de") return de_settings_passkeys_created(inputs)
	if (locale === "fr") return fr_settings_passkeys_created(inputs)
	if (locale === "it") return it_settings_passkeys_created(inputs)
	if (locale === "nl") return nl_settings_passkeys_created(inputs)
	if (locale === "pl") return pl_settings_passkeys_created(inputs)
	if (locale === "pt") return pt_settings_passkeys_created(inputs)
	if (locale === "ru") return ru_settings_passkeys_created(inputs)
	if (locale === "sv") return sv_settings_passkeys_created(inputs)
	if (locale === "tr") return tr_settings_passkeys_created(inputs)
	if (locale === "zh") return zh_settings_passkeys_created(inputs)
	if (locale === "ja") return ja_settings_passkeys_created(inputs)
	return en_settings_passkeys_created(inputs)
});

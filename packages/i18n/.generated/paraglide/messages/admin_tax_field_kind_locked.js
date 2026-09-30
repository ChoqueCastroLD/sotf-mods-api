/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_Kind_LockedInputs */

const en_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixed once created.`)
};

const es_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se puede cambiar una vez creada.`)
};

const de_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach dem Anlegen nicht mehr änderbar.`)
};

const fr_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non modifiable après la création.`)
};

const it_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non modificabile dopo la creazione.`)
};

const nl_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vast na het aanmaken.`)
};

const pl_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie można zmienić po utworzeniu.`)
};

const pt_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não pode ser mudado depois de criada.`)
};

const ru_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`После создания не меняется.`)
};

const sv_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan inte ändras när den väl skapats.`)
};

const tr_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oluşturulduktan sonra değiştirilemez.`)
};

const zh_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建后不可更改。`)
};

const ja_admin_tax_field_kind_locked = /** @type {(inputs: Admin_Tax_Field_Kind_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作成後は変更できません。`)
};

/**
* | output |
* | --- |
* | "Fixed once created." |
*
* @param {Admin_Tax_Field_Kind_LockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_kind_locked = /** @type {((inputs?: Admin_Tax_Field_Kind_LockedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_Kind_LockedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_kind_locked(inputs)
	if (locale === "de") return de_admin_tax_field_kind_locked(inputs)
	if (locale === "fr") return fr_admin_tax_field_kind_locked(inputs)
	if (locale === "it") return it_admin_tax_field_kind_locked(inputs)
	if (locale === "nl") return nl_admin_tax_field_kind_locked(inputs)
	if (locale === "pl") return pl_admin_tax_field_kind_locked(inputs)
	if (locale === "pt") return pt_admin_tax_field_kind_locked(inputs)
	if (locale === "ru") return ru_admin_tax_field_kind_locked(inputs)
	if (locale === "sv") return sv_admin_tax_field_kind_locked(inputs)
	if (locale === "tr") return tr_admin_tax_field_kind_locked(inputs)
	if (locale === "zh") return zh_admin_tax_field_kind_locked(inputs)
	if (locale === "ja") return ja_admin_tax_field_kind_locked(inputs)
	return en_admin_tax_field_kind_locked(inputs)
});

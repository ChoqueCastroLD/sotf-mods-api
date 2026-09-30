/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Field_Ends_HintInputs */

const en_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave empty to keep it until you end it.`)
};

const es_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déjalo vacío para mantenerlo hasta que lo termines.`)
};

const de_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer lassen, damit sie bleibt, bis du sie beendest.`)
};

const fr_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laissez vide pour la garder jusqu’à ce que vous la terminiez.`)
};

const it_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lascia vuoto per mantenerlo finché non lo termini.`)
};

const nl_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat leeg om hem te houden tot je hem beëindigt.`)
};

const pl_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zostaw puste, aby trwało, dopóki go nie zakończysz.`)
};

const pt_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deixe vazio para mantê-lo até você encerrar.`)
};

const ru_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оставьте пустым, чтобы показывать до ручного завершения.`)
};

const sv_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lämna tomt för att behålla det tills du avslutar det.`)
};

const tr_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sen bitirene kadar sürmesi için boş bırak.`)
};

const zh_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`留空则一直显示，直到你手动结束。`)
};

const ja_admin_ann_field_ends_hint = /** @type {(inputs: Admin_Ann_Field_Ends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`空欄にすると、手動で終了するまで表示されます。`)
};

/**
* | output |
* | --- |
* | "Leave empty to keep it until you end it." |
*
* @param {Admin_Ann_Field_Ends_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_field_ends_hint = /** @type {((inputs?: Admin_Ann_Field_Ends_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Field_Ends_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_field_ends_hint(inputs)
	if (locale === "de") return de_admin_ann_field_ends_hint(inputs)
	if (locale === "fr") return fr_admin_ann_field_ends_hint(inputs)
	if (locale === "it") return it_admin_ann_field_ends_hint(inputs)
	if (locale === "nl") return nl_admin_ann_field_ends_hint(inputs)
	if (locale === "pl") return pl_admin_ann_field_ends_hint(inputs)
	if (locale === "pt") return pt_admin_ann_field_ends_hint(inputs)
	if (locale === "ru") return ru_admin_ann_field_ends_hint(inputs)
	if (locale === "sv") return sv_admin_ann_field_ends_hint(inputs)
	if (locale === "tr") return tr_admin_ann_field_ends_hint(inputs)
	if (locale === "zh") return zh_admin_ann_field_ends_hint(inputs)
	if (locale === "ja") return ja_admin_ann_field_ends_hint(inputs)
	return en_admin_ann_field_ends_hint(inputs)
});

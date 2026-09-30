/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Settings_Featured_Badges_CountInputs */

const en_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} of ${i?.max} selected`)
};

const es_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} de ${i?.max} seleccionadas`)
};

const de_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} von ${i?.max} ausgewählt`)
};

const fr_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} sur ${i?.max} sélectionnés`)
};

const it_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} di ${i?.max} selezionati`)
};

const nl_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} van ${i?.max} gekozen`)
};

const pl_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wybrano ${i?.count} z ${i?.max}`)
};

const pt_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} de ${i?.max} selecionadas`)
};

const ru_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выбрано ${i?.count} из ${i?.max}`)
};

const sv_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} av ${i?.max} valda`)
};

const tr_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} içinden ${i?.count} seçildi`)
};

const zh_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已选 ${i?.count} / ${i?.max}`)
};

const ja_settings_featured_badges_count = /** @type {(inputs: Settings_Featured_Badges_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} 個中 ${i?.count} 個を選択`)
};

/**
* | output |
* | --- |
* | "{count} of {max} selected" |
*
* @param {Settings_Featured_Badges_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_featured_badges_count = /** @type {((inputs: Settings_Featured_Badges_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Featured_Badges_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_featured_badges_count(inputs)
	if (locale === "de") return de_settings_featured_badges_count(inputs)
	if (locale === "fr") return fr_settings_featured_badges_count(inputs)
	if (locale === "it") return it_settings_featured_badges_count(inputs)
	if (locale === "nl") return nl_settings_featured_badges_count(inputs)
	if (locale === "pl") return pl_settings_featured_badges_count(inputs)
	if (locale === "pt") return pt_settings_featured_badges_count(inputs)
	if (locale === "ru") return ru_settings_featured_badges_count(inputs)
	if (locale === "sv") return sv_settings_featured_badges_count(inputs)
	if (locale === "tr") return tr_settings_featured_badges_count(inputs)
	if (locale === "zh") return zh_settings_featured_badges_count(inputs)
	if (locale === "ja") return ja_settings_featured_badges_count(inputs)
	return en_settings_featured_badges_count(inputs)
});

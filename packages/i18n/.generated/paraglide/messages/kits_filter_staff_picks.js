/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Filter_Staff_PicksInputs */

const en_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff picks`)
};

const es_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selección del equipo`)
};

const de_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team-Empfehlungen`)
};

const fr_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choix de l’équipe`)
};

const it_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scelte dello staff`)
};

const nl_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keuze van het team`)
};

const pl_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybór redakcji`)
};

const pt_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolhas da equipe`)
};

const ru_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбор команды`)
};

const sv_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redaktionens val`)
};

const tr_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekibin seçimleri`)
};

const zh_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑精选`)
};

const ja_kits_filter_staff_picks = /** @type {(inputs: Kits_Filter_Staff_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スタッフのおすすめ`)
};

/**
* | output |
* | --- |
* | "Staff picks" |
*
* @param {Kits_Filter_Staff_PicksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_filter_staff_picks = /** @type {((inputs?: Kits_Filter_Staff_PicksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Filter_Staff_PicksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_filter_staff_picks(inputs)
	if (locale === "de") return de_kits_filter_staff_picks(inputs)
	if (locale === "fr") return fr_kits_filter_staff_picks(inputs)
	if (locale === "it") return it_kits_filter_staff_picks(inputs)
	if (locale === "nl") return nl_kits_filter_staff_picks(inputs)
	if (locale === "pl") return pl_kits_filter_staff_picks(inputs)
	if (locale === "pt") return pt_kits_filter_staff_picks(inputs)
	if (locale === "ru") return ru_kits_filter_staff_picks(inputs)
	if (locale === "sv") return sv_kits_filter_staff_picks(inputs)
	if (locale === "tr") return tr_kits_filter_staff_picks(inputs)
	if (locale === "zh") return zh_kits_filter_staff_picks(inputs)
	if (locale === "ja") return ja_kits_filter_staff_picks(inputs)
	return en_kits_filter_staff_picks(inputs)
});

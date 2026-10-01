/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, total: NonNullable<unknown> }} Jams_Booth_Entry_OfInputs */

const en_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entry ${i?.current} of ${i?.total}`)
};

const es_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Participación ${i?.current} de ${i?.total}`)
};

const de_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beitrag ${i?.current} von ${i?.total}`)
};

const fr_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Participation ${i?.current} sur ${i?.total}`)
};

const it_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Iscrizione ${i?.current} di ${i?.total}`)
};

const nl_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inzending ${i?.current} van ${i?.total}`)
};

const pl_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zgłoszenie ${i?.current} z ${i?.total}`)
};

const pt_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inscrição ${i?.current} de ${i?.total}`)
};

const ru_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Работа ${i?.current} из ${i?.total}`)
};

const sv_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bidrag ${i?.current} av ${i?.total}`)
};

const tr_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Başvuru ${i?.current} / ${i?.total}`)
};

const zh_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作品 ${i?.current}/${i?.total}`)
};

const ja_jams_booth_entry_of = /** @type {(inputs: Jams_Booth_Entry_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作品 ${i?.current}/${i?.total}`)
};

/**
* | output |
* | --- |
* | "Entry {current} of {total}" |
*
* @param {Jams_Booth_Entry_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_entry_of = /** @type {((inputs: Jams_Booth_Entry_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_Entry_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_entry_of(inputs)
	if (locale === "de") return de_jams_booth_entry_of(inputs)
	if (locale === "fr") return fr_jams_booth_entry_of(inputs)
	if (locale === "it") return it_jams_booth_entry_of(inputs)
	if (locale === "nl") return nl_jams_booth_entry_of(inputs)
	if (locale === "pl") return pl_jams_booth_entry_of(inputs)
	if (locale === "pt") return pt_jams_booth_entry_of(inputs)
	if (locale === "ru") return ru_jams_booth_entry_of(inputs)
	if (locale === "sv") return sv_jams_booth_entry_of(inputs)
	if (locale === "tr") return tr_jams_booth_entry_of(inputs)
	if (locale === "zh") return zh_jams_booth_entry_of(inputs)
	if (locale === "ja") return ja_jams_booth_entry_of(inputs)
	return en_jams_booth_entry_of(inputs)
});

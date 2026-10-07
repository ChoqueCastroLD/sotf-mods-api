/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Range_InvalidInputs */

const en_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The start date must not be after the end date, and the end date must not be in the future.`)
};

const es_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La fecha de inicio no puede ser posterior a la de fin, y la de fin no puede ser futura.`)
};

const de_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Startdatum darf nicht nach dem Enddatum liegen, und das Enddatum darf nicht in der Zukunft liegen.`)
};

const fr_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La date de début ne doit pas suivre la date de fin, et la date de fin ne peut pas être dans le futur.`)
};

const it_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La data di inizio non può essere successiva a quella di fine, e la data di fine non può essere nel futuro.`)
};

const nl_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De begindatum mag niet na de einddatum liggen en de einddatum mag niet in de toekomst liggen.`)
};

const pl_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data początkowa nie może być późniejsza niż końcowa, a data końcowa nie może być w przyszłości.`)
};

const pt_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A data de início não pode ser posterior à data de fim, e a data de fim não pode ser futura.`)
};

const ru_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дата начала не может быть позже даты окончания, а дата окончания не может быть в будущем.`)
};

const sv_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Startdatumet får inte vara efter slutdatumet, och slutdatumet får inte ligga i framtiden.`)
};

const tr_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlangıç tarihi bitiş tarihinden sonra olamaz, bitiş tarihi de gelecekte olamaz.`)
};

const zh_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始日期不能晚于结束日期，结束日期不能是未来日期。`)
};

const ja_basecamp_range_invalid = /** @type {(inputs: Basecamp_Range_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開始日は終了日より後にできません。終了日は未来の日付にできません。`)
};

/**
* | output |
* | --- |
* | "The start date must not be after the end date, and the end date must not be in the future." |
*
* @param {Basecamp_Range_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_range_invalid = /** @type {((inputs?: Basecamp_Range_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Range_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_range_invalid(inputs)
	if (locale === "de") return de_basecamp_range_invalid(inputs)
	if (locale === "fr") return fr_basecamp_range_invalid(inputs)
	if (locale === "it") return it_basecamp_range_invalid(inputs)
	if (locale === "nl") return nl_basecamp_range_invalid(inputs)
	if (locale === "pl") return pl_basecamp_range_invalid(inputs)
	if (locale === "pt") return pt_basecamp_range_invalid(inputs)
	if (locale === "ru") return ru_basecamp_range_invalid(inputs)
	if (locale === "sv") return sv_basecamp_range_invalid(inputs)
	if (locale === "tr") return tr_basecamp_range_invalid(inputs)
	if (locale === "zh") return zh_basecamp_range_invalid(inputs)
	if (locale === "ja") return ja_basecamp_range_invalid(inputs)
	return en_basecamp_range_invalid(inputs)
});

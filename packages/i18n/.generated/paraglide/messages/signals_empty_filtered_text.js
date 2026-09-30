/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Empty_Filtered_TextInputs */

const en_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No signal matches this filter yet. Try “All”.`)
};

const es_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna señal coincide con este filtro todavía. Prueba con «Todo».`)
};

const de_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch kein Signal passt zu diesem Filter. Versuch es mit „Alle“.`)
};

const fr_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun signal ne correspond encore à ce filtre. Essayez « Tout ».`)
};

const it_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun segnale corrisponde ancora a questo filtro. Prova con «Tutti».`)
};

const nl_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er past nog geen signaal bij dit filter. Probeer ‘Alles’.`)
};

const pl_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden sygnał nie pasuje jeszcze do tego filtra. Spróbuj „Wszystko”.`)
};

const pt_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum sinal corresponde a este filtro ainda. Tente “Tudo”.`)
};

const ru_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока ни один сигнал не подходит под этот фильтр. Попробуйте «Все».`)
};

const sv_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen signal matchar det här filtret än. Prova ”Alla”.`)
};

const tr_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz bu filtreye uyan sinyal yok. “Tümü”nü dene.`)
};

const zh_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时没有符合此筛选条件的信号。试试“全部”。`)
};

const ja_signals_empty_filtered_text = /** @type {(inputs: Signals_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このフィルターに一致するシグナルはまだありません。「すべて」を試してください。`)
};

/**
* | output |
* | --- |
* | "No signal matches this filter yet. Try “All”." |
*
* @param {Signals_Empty_Filtered_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_empty_filtered_text = /** @type {((inputs?: Signals_Empty_Filtered_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Empty_Filtered_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_empty_filtered_text(inputs)
	if (locale === "de") return de_signals_empty_filtered_text(inputs)
	if (locale === "fr") return fr_signals_empty_filtered_text(inputs)
	if (locale === "it") return it_signals_empty_filtered_text(inputs)
	if (locale === "nl") return nl_signals_empty_filtered_text(inputs)
	if (locale === "pl") return pl_signals_empty_filtered_text(inputs)
	if (locale === "pt") return pt_signals_empty_filtered_text(inputs)
	if (locale === "ru") return ru_signals_empty_filtered_text(inputs)
	if (locale === "sv") return sv_signals_empty_filtered_text(inputs)
	if (locale === "tr") return tr_signals_empty_filtered_text(inputs)
	if (locale === "zh") return zh_signals_empty_filtered_text(inputs)
	if (locale === "ja") return ja_signals_empty_filtered_text(inputs)
	return en_signals_empty_filtered_text(inputs)
});

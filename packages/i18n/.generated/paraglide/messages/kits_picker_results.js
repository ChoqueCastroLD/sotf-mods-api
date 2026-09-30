/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Picker_ResultsInputs */

const en_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} result`);
	return /** @type {LocalizedString} */ (`${count__number} results`)
	
};

const es_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultado`);
	return /** @type {LocalizedString} */ (`${count__number} resultados`)
	
};

const de_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Ergebnis`);
	return /** @type {LocalizedString} */ (`${count__number} Ergebnisse`)
	
};

const fr_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} résultat`);
	return /** @type {LocalizedString} */ (`${count__number} résultats`)
	
};

const it_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} risultato`);
	return /** @type {LocalizedString} */ (`${count__number} risultati`)
	
};

const nl_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultaat`);
	return /** @type {LocalizedString} */ (`${count__number} resultaten`)
	
};

const pl_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wynik`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wyniki`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wyników`);
	return /** @type {LocalizedString} */ (`${count__number} wyniku`)
	
};

const pt_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultado`);
	return /** @type {LocalizedString} */ (`${count__number} resultados`)
	
};

const ru_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} результат`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} результата`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} результатов`);
	return /** @type {LocalizedString} */ (`${count__number} результата`)
	
};

const sv_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultat`);
	return /** @type {LocalizedString} */ (`${count__number} resultat`)
	
};

const tr_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sonuç`);
	return /** @type {LocalizedString} */ (`${count__number} sonuç`)
	
};

const zh_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个结果`)
};

const ja_kits_picker_results = /** @type {(inputs: Kits_Picker_ResultsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件の結果`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} result" |
* | * | "{count__number} results" |
*
* @param {Kits_Picker_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_picker_results = /** @type {((inputs: Kits_Picker_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Picker_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_picker_results(inputs)
	if (locale === "de") return de_kits_picker_results(inputs)
	if (locale === "fr") return fr_kits_picker_results(inputs)
	if (locale === "it") return it_kits_picker_results(inputs)
	if (locale === "nl") return nl_kits_picker_results(inputs)
	if (locale === "pl") return pl_kits_picker_results(inputs)
	if (locale === "pt") return pt_kits_picker_results(inputs)
	if (locale === "ru") return ru_kits_picker_results(inputs)
	if (locale === "sv") return sv_kits_picker_results(inputs)
	if (locale === "tr") return tr_kits_picker_results(inputs)
	if (locale === "zh") return zh_kits_picker_results(inputs)
	if (locale === "ja") return ja_kits_picker_results(inputs)
	return en_kits_picker_results(inputs)
});

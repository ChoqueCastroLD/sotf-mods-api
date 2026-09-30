/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Jams_Entries_CountInputs */

const en_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} entry`);
	return /** @type {LocalizedString} */ (`${count__number} entries`)
	
};

const es_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} participación`);
	return /** @type {LocalizedString} */ (`${count__number} participaciones`)
	
};

const de_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Beitrag`);
	return /** @type {LocalizedString} */ (`${count__number} Beiträge`)
	
};

const fr_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} participation`);
	return /** @type {LocalizedString} */ (`${count__number} participations`)
	
};

const it_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} iscrizione`);
	return /** @type {LocalizedString} */ (`${count__number} iscrizioni`)
	
};

const nl_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} inzending`);
	return /** @type {LocalizedString} */ (`${count__number} inzendingen`)
	
};

const pl_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} zgłoszenie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} zgłoszenia`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} zgłoszeń`);
	return /** @type {LocalizedString} */ (`${count__number} zgłoszenia`)
	
};

const pt_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} inscrição`);
	return /** @type {LocalizedString} */ (`${count__number} inscrições`)
	
};

const ru_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} работа`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} работы`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} работ`);
	return /** @type {LocalizedString} */ (`${count__number} работы`)
	
};

const sv_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bidrag`);
	return /** @type {LocalizedString} */ (`${count__number} bidrag`)
	
};

const tr_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} başvuru`);
	return /** @type {LocalizedString} */ (`${count__number} başvuru`)
	
};

const zh_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件作品`)
};

const ja_jams_entries_count = /** @type {(inputs: Jams_Entries_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件の作品`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} entry" |
* | * | "{count__number} entries" |
*
* @param {Jams_Entries_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_count = /** @type {((inputs: Jams_Entries_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_count(inputs)
	if (locale === "de") return de_jams_entries_count(inputs)
	if (locale === "fr") return fr_jams_entries_count(inputs)
	if (locale === "it") return it_jams_entries_count(inputs)
	if (locale === "nl") return nl_jams_entries_count(inputs)
	if (locale === "pl") return pl_jams_entries_count(inputs)
	if (locale === "pt") return pt_jams_entries_count(inputs)
	if (locale === "ru") return ru_jams_entries_count(inputs)
	if (locale === "sv") return sv_jams_entries_count(inputs)
	if (locale === "tr") return tr_jams_entries_count(inputs)
	if (locale === "zh") return zh_jams_entries_count(inputs)
	if (locale === "ja") return ja_jams_entries_count(inputs)
	return en_jams_entries_count(inputs)
});

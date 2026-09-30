/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Profile_Activity_Count_ReportsInputs */

const en_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} field report`);
	return /** @type {LocalizedString} */ (`${count__number} field reports`)
	
};

const es_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reporte de campo`);
	return /** @type {LocalizedString} */ (`${count__number} reportes de campo`)
	
};

const de_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Feldbericht`);
	return /** @type {LocalizedString} */ (`${count__number} Feldberichte`)
	
};

const fr_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} rapport de terrain`);
	return /** @type {LocalizedString} */ (`${count__number} rapports de terrain`)
	
};

const it_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} rapporto sul campo`);
	return /** @type {LocalizedString} */ (`${count__number} rapporti sul campo`)
	
};

const nl_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} veldrapport`);
	return /** @type {LocalizedString} */ (`${count__number} veldrapporten`)
	
};

const pl_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} raport terenowy`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} raporty terenowe`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} raportów terenowych`);
	return /** @type {LocalizedString} */ (`${count__number} raportu terenowego`)
	
};

const pt_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} relatório de campo`);
	return /** @type {LocalizedString} */ (`${count__number} relatórios de campo`)
	
};

const ru_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} полевой отчёт`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} полевых отчёта`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} полевых отчётов`);
	return /** @type {LocalizedString} */ (`${count__number} полевого отчёта`)
	
};

const sv_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fältrapport`);
	return /** @type {LocalizedString} */ (`${count__number} fältrapporter`)
	
};

const tr_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} saha raporu`);
	return /** @type {LocalizedString} */ (`${count__number} saha raporu`)
	
};

const zh_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 份实地报告`)
};

const ja_profile_activity_count_reports = /** @type {(inputs: Profile_Activity_Count_ReportsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`フィールドレポート ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} field report" |
* | * | "{count__number} field reports" |
*
* @param {Profile_Activity_Count_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_count_reports = /** @type {((inputs: Profile_Activity_Count_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Count_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_count_reports(inputs)
	if (locale === "de") return de_profile_activity_count_reports(inputs)
	if (locale === "fr") return fr_profile_activity_count_reports(inputs)
	if (locale === "it") return it_profile_activity_count_reports(inputs)
	if (locale === "nl") return nl_profile_activity_count_reports(inputs)
	if (locale === "pl") return pl_profile_activity_count_reports(inputs)
	if (locale === "pt") return pt_profile_activity_count_reports(inputs)
	if (locale === "ru") return ru_profile_activity_count_reports(inputs)
	if (locale === "sv") return sv_profile_activity_count_reports(inputs)
	if (locale === "tr") return tr_profile_activity_count_reports(inputs)
	if (locale === "zh") return zh_profile_activity_count_reports(inputs)
	if (locale === "ja") return ja_profile_activity_count_reports(inputs)
	return en_profile_activity_count_reports(inputs)
});

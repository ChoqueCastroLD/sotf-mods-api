/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_Csv_IssuesInputs */

const en_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} line was skipped:`);
	return /** @type {LocalizedString} */ (`${count__number} lines were skipped:`)
	
};

const es_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Se omitió ${count__number} línea:`);
	return /** @type {LocalizedString} */ (`Se omitieron ${count__number} líneas:`)
	
};

const de_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Zeile wurde übersprungen:`);
	return /** @type {LocalizedString} */ (`${count__number} Zeilen wurden übersprungen:`)
	
};

const fr_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ligne a été ignorée :`);
	return /** @type {LocalizedString} */ (`${count__number} lignes ont été ignorées :`)
	
};

const it_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} riga è stata saltata:`);
	return /** @type {LocalizedString} */ (`${count__number} righe sono state saltate:`)
	
};

const nl_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} regel is overgeslagen:`);
	return /** @type {LocalizedString} */ (`${count__number} regels zijn overgeslagen:`)
	
};

const pl_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Pominięto ${count__number} wiersz:`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Pominięto ${count__number} wiersze:`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Pominięto ${count__number} wierszy:`);
	return /** @type {LocalizedString} */ (`Pominięto ${count__number} wiersza:`)
	
};

const pt_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} linha foi ignorada:`);
	return /** @type {LocalizedString} */ (`${count__number} linhas foram ignoradas:`)
	
};

const ru_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Пропущена ${count__number} строка:`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Пропущено ${count__number} строки:`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Пропущено ${count__number} строк:`);
	return /** @type {LocalizedString} */ (`Пропущено ${count__number} строки:`)
	
};

const sv_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} rad hoppades över:`);
	return /** @type {LocalizedString} */ (`${count__number} rader hoppades över:`)
	
};

const tr_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} satır atlandı:`);
	return /** @type {LocalizedString} */ (`${count__number} satır atlandı:`)
	
};

const zh_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`已跳过 ${count__number} 行：`)
};

const ja_admin_recat_csv_issues = /** @type {(inputs: Admin_Recat_Csv_IssuesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 行をスキップしました：`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} line was skipped:" |
* | * | "{count__number} lines were skipped:" |
*
* @param {Admin_Recat_Csv_IssuesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_issues = /** @type {((inputs: Admin_Recat_Csv_IssuesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_IssuesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_issues(inputs)
	if (locale === "de") return de_admin_recat_csv_issues(inputs)
	if (locale === "fr") return fr_admin_recat_csv_issues(inputs)
	if (locale === "it") return it_admin_recat_csv_issues(inputs)
	if (locale === "nl") return nl_admin_recat_csv_issues(inputs)
	if (locale === "pl") return pl_admin_recat_csv_issues(inputs)
	if (locale === "pt") return pt_admin_recat_csv_issues(inputs)
	if (locale === "ru") return ru_admin_recat_csv_issues(inputs)
	if (locale === "sv") return sv_admin_recat_csv_issues(inputs)
	if (locale === "tr") return tr_admin_recat_csv_issues(inputs)
	if (locale === "zh") return zh_admin_recat_csv_issues(inputs)
	if (locale === "ja") return ja_admin_recat_csv_issues(inputs)
	return en_admin_recat_csv_issues(inputs)
});

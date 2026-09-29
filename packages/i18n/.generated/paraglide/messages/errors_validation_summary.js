/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Errors_Validation_SummaryInputs */

const en_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Fix ${count__number} field to continue.`);
	return /** @type {LocalizedString} */ (`Fix ${count__number} fields to continue.`)
	
};

const es_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Corrige ${count__number} campo para continuar.`);
	return /** @type {LocalizedString} */ (`Corrige ${count__number} campos para continuar.`)
	
};

const de_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Korrigiere ${count__number} Feld, um fortzufahren.`);
	return /** @type {LocalizedString} */ (`Korrigiere ${count__number} Felder, um fortzufahren.`)
	
};

const fr_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Corrigez ${count__number} champ pour continuer.`);
	return /** @type {LocalizedString} */ (`Corrigez ${count__number} champs pour continuer.`)
	
};

const it_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Correggi ${count__number} campo per continuare.`);
	return /** @type {LocalizedString} */ (`Correggi ${count__number} campi per continuare.`)
	
};

const nl_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Verbeter ${count__number} veld om verder te gaan.`);
	return /** @type {LocalizedString} */ (`Verbeter ${count__number} velden om verder te gaan.`)
	
};

const pl_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Popraw ${count__number} pole, aby kontynuować.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Popraw ${count__number} pola, aby kontynuować.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Popraw ${count__number} pól, aby kontynuować.`);
	return /** @type {LocalizedString} */ (`Popraw ${count__number} pola, aby kontynuować.`)
	
};

const pt_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Corrija ${count__number} campo para continuar.`);
	return /** @type {LocalizedString} */ (`Corrija ${count__number} campos para continuar.`)
	
};

const ru_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Исправьте ${count__number} поле, чтобы продолжить.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Исправьте ${count__number} поля, чтобы продолжить.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Исправьте ${count__number} полей, чтобы продолжить.`);
	return /** @type {LocalizedString} */ (`Исправьте ${count__number} поля, чтобы продолжить.`)
	
};

const sv_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Rätta ${count__number} fält för att fortsätta.`);
	return /** @type {LocalizedString} */ (`Rätta ${count__number} fält för att fortsätta.`)
	
};

const tr_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Devam etmek için ${count__number} alanı düzelt.`);
	return /** @type {LocalizedString} */ (`Devam etmek için ${count__number} alanı düzelt.`)
	
};

const zh_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`请修改 ${count__number} 个字段后继续。`)
};

const ja_errors_validation_summary = /** @type {(inputs: Errors_Validation_SummaryInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`続けるには ${count__number} 件の項目を修正してください。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Fix {count__number} field to continue." |
* | * | "Fix {count__number} fields to continue." |
*
* @param {Errors_Validation_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_validation_summary = /** @type {((inputs: Errors_Validation_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Validation_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_validation_summary(inputs)
	if (locale === "de") return de_errors_validation_summary(inputs)
	if (locale === "fr") return fr_errors_validation_summary(inputs)
	if (locale === "it") return it_errors_validation_summary(inputs)
	if (locale === "nl") return nl_errors_validation_summary(inputs)
	if (locale === "pl") return pl_errors_validation_summary(inputs)
	if (locale === "pt") return pt_errors_validation_summary(inputs)
	if (locale === "ru") return ru_errors_validation_summary(inputs)
	if (locale === "sv") return sv_errors_validation_summary(inputs)
	if (locale === "tr") return tr_errors_validation_summary(inputs)
	if (locale === "zh") return zh_errors_validation_summary(inputs)
	if (locale === "ja") return ja_errors_validation_summary(inputs)
	return en_errors_validation_summary(inputs)
});

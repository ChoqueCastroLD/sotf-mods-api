/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ templates: NonNullable<unknown>, samples: NonNullable<unknown> }} Admin_Rum_SummaryInputs */

const en_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("en", i?.templates, {});
	const templates__number = registry.number("en", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} template · ${i?.samples} samples`);
	return /** @type {LocalizedString} */ (`${templates__number} templates · ${i?.samples} samples`)
	
};

const es_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("es", i?.templates, {});
	const templates__number = registry.number("es", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} plantilla · ${i?.samples} muestras`);
	return /** @type {LocalizedString} */ (`${templates__number} plantillas · ${i?.samples} muestras`)
	
};

const de_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("de", i?.templates, {});
	const templates__number = registry.number("de", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} Vorlage · ${i?.samples} Messungen`);
	return /** @type {LocalizedString} */ (`${templates__number} Vorlagen · ${i?.samples} Messungen`)
	
};

const fr_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("fr", i?.templates, {});
	const templates__number = registry.number("fr", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} modèle · ${i?.samples} mesures`);
	return /** @type {LocalizedString} */ (`${templates__number} modèles · ${i?.samples} mesures`)
	
};

const it_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("it", i?.templates, {});
	const templates__number = registry.number("it", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} modello · ${i?.samples} misurazioni`);
	return /** @type {LocalizedString} */ (`${templates__number} modelli · ${i?.samples} misurazioni`)
	
};

const nl_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("nl", i?.templates, {});
	const templates__number = registry.number("nl", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} sjabloon · ${i?.samples} metingen`);
	return /** @type {LocalizedString} */ (`${templates__number} sjablonen · ${i?.samples} metingen`)
	
};

const pl_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("pl", i?.templates, {});
	const templates__number = registry.number("pl", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} szablon · pomiary: ${i?.samples}`);
	if (templates__plural === "few") return /** @type {LocalizedString} */ (`${templates__number} szablony · pomiary: ${i?.samples}`);
	if (templates__plural === "many") return /** @type {LocalizedString} */ (`${templates__number} szablonów · pomiary: ${i?.samples}`);
	return /** @type {LocalizedString} */ (`${templates__number} szablonu · pomiary: ${i?.samples}`)
	
};

const pt_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("pt", i?.templates, {});
	const templates__number = registry.number("pt", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} modelo · ${i?.samples} medições`);
	return /** @type {LocalizedString} */ (`${templates__number} modelos · ${i?.samples} medições`)
	
};

const ru_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("ru", i?.templates, {});
	const templates__number = registry.number("ru", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} шаблон · замеров: ${i?.samples}`);
	if (templates__plural === "few") return /** @type {LocalizedString} */ (`${templates__number} шаблона · замеров: ${i?.samples}`);
	if (templates__plural === "many") return /** @type {LocalizedString} */ (`${templates__number} шаблонов · замеров: ${i?.samples}`);
	return /** @type {LocalizedString} */ (`${templates__number} шаблона · замеров: ${i?.samples}`)
	
};

const sv_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("sv", i?.templates, {});
	const templates__number = registry.number("sv", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} mall · ${i?.samples} mätningar`);
	return /** @type {LocalizedString} */ (`${templates__number} mallar · ${i?.samples} mätningar`)
	
};

const tr_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {const templates__plural = registry.plural("tr", i?.templates, {});
	const templates__number = registry.number("tr", i?.templates, {});
	if (templates__plural === "one") return /** @type {LocalizedString} */ (`${templates__number} şablon · ${i?.samples} ölçüm`);
	return /** @type {LocalizedString} */ (`${templates__number} şablon · ${i?.samples} ölçüm`)
	
};

const zh_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {
	const templates__plural = registry.plural("zh", i?.templates, {});
	const templates__number = registry.number("zh", i?.templates, {});return /** @type {LocalizedString} */ (`${templates__number} 个模板 · ${i?.samples} 个样本`)
};

const ja_admin_rum_summary = /** @type {(inputs: Admin_Rum_SummaryInputs) => LocalizedString} */ (i) => {
	const templates__plural = registry.plural("ja", i?.templates, {});
	const templates__number = registry.number("ja", i?.templates, {});return /** @type {LocalizedString} */ (`${templates__number} テンプレート · ${i?.samples} サンプル`)
};

/**
* | templates__plural | output |
* | --- | --- |
* | "one" | "{templates__number} template · {samples} samples" |
* | * | "{templates__number} templates · {samples} samples" |
*
* @param {Admin_Rum_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_summary = /** @type {((inputs: Admin_Rum_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_summary(inputs)
	if (locale === "de") return de_admin_rum_summary(inputs)
	if (locale === "fr") return fr_admin_rum_summary(inputs)
	if (locale === "it") return it_admin_rum_summary(inputs)
	if (locale === "nl") return nl_admin_rum_summary(inputs)
	if (locale === "pl") return pl_admin_rum_summary(inputs)
	if (locale === "pt") return pt_admin_rum_summary(inputs)
	if (locale === "ru") return ru_admin_rum_summary(inputs)
	if (locale === "sv") return sv_admin_rum_summary(inputs)
	if (locale === "tr") return tr_admin_rum_summary(inputs)
	if (locale === "zh") return zh_admin_rum_summary(inputs)
	if (locale === "ja") return ja_admin_rum_summary(inputs)
	return en_admin_rum_summary(inputs)
});

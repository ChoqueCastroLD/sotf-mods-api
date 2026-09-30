/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ percent: NonNullable<unknown>, days: NonNullable<unknown> }} Ui_Domain_Stat_Delta_UpInputs */

const en_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("en", i?.days, {});
	const days__number = registry.number("en", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Up ${i?.percent} in ${days__number} day`);
	return /** @type {LocalizedString} */ (`Up ${i?.percent} in ${days__number} days`)
	
};

const es_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("es", i?.days, {});
	const days__number = registry.number("es", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Sube ${i?.percent} en ${days__number} día`);
	return /** @type {LocalizedString} */ (`Sube ${i?.percent} en ${days__number} días`)
	
};

const de_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("de", i?.days, {});
	const days__number = registry.number("de", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Plus ${i?.percent} in ${days__number} Tag`);
	return /** @type {LocalizedString} */ (`Plus ${i?.percent} in ${days__number} Tagen`)
	
};

const fr_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("fr", i?.days, {});
	const days__number = registry.number("fr", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`En hausse de ${i?.percent} sur ${days__number} jour`);
	return /** @type {LocalizedString} */ (`En hausse de ${i?.percent} sur ${days__number} jours`)
	
};

const it_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("it", i?.days, {});
	const days__number = registry.number("it", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`In aumento del ${i?.percent} in ${days__number} giorno`);
	return /** @type {LocalizedString} */ (`In aumento del ${i?.percent} in ${days__number} giorni`)
	
};

const nl_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("nl", i?.days, {});
	const days__number = registry.number("nl", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${i?.percent} gestegen in ${days__number} dag`);
	return /** @type {LocalizedString} */ (`${i?.percent} gestegen in ${days__number} dagen`)
	
};

const pl_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("pl", i?.days, {});
	const days__number = registry.number("pl", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Wzrost o ${i?.percent} w ${days__number} dzień`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`Wzrost o ${i?.percent} w ${days__number} dni`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`Wzrost o ${i?.percent} w ${days__number} dni`);
	return /** @type {LocalizedString} */ (`Wzrost o ${i?.percent} w ${days__number} dnia`)
	
};

const pt_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("pt", i?.days, {});
	const days__number = registry.number("pt", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Alta de ${i?.percent} em ${days__number} dia`);
	return /** @type {LocalizedString} */ (`Alta de ${i?.percent} em ${days__number} dias`)
	
};

const ru_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("ru", i?.days, {});
	const days__number = registry.number("ru", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Рост на ${i?.percent} за ${days__number} день`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`Рост на ${i?.percent} за ${days__number} дня`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`Рост на ${i?.percent} за ${days__number} дней`);
	return /** @type {LocalizedString} */ (`Рост на ${i?.percent} за ${days__number} дня`)
	
};

const sv_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("sv", i?.days, {});
	const days__number = registry.number("sv", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Upp ${i?.percent} på ${days__number} dag`);
	return /** @type {LocalizedString} */ (`Upp ${i?.percent} på ${days__number} dagar`)
	
};

const tr_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("tr", i?.days, {});
	const days__number = registry.number("tr", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} günde ${i?.percent} artış`);
	return /** @type {LocalizedString} */ (`${days__number} günde ${i?.percent} artış`)
	
};

const zh_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {
	const days__plural = registry.plural("zh", i?.days, {});
	const days__number = registry.number("zh", i?.days, {});return /** @type {LocalizedString} */ (`${days__number} 天内上升 ${i?.percent}`)
};

const ja_ui_domain_stat_delta_up = /** @type {(inputs: Ui_Domain_Stat_Delta_UpInputs) => LocalizedString} */ (i) => {
	const days__plural = registry.plural("ja", i?.days, {});
	const days__number = registry.number("ja", i?.days, {});return /** @type {LocalizedString} */ (`${days__number} 日間で ${i?.percent} 増加`)
};

/**
* | days__plural | output |
* | --- | --- |
* | "one" | "Up {percent} in {days__number} day" |
* | * | "Up {percent} in {days__number} days" |
*
* @param {Ui_Domain_Stat_Delta_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_stat_delta_up = /** @type {((inputs: Ui_Domain_Stat_Delta_UpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Stat_Delta_UpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_stat_delta_up(inputs)
	if (locale === "de") return de_ui_domain_stat_delta_up(inputs)
	if (locale === "fr") return fr_ui_domain_stat_delta_up(inputs)
	if (locale === "it") return it_ui_domain_stat_delta_up(inputs)
	if (locale === "nl") return nl_ui_domain_stat_delta_up(inputs)
	if (locale === "pl") return pl_ui_domain_stat_delta_up(inputs)
	if (locale === "pt") return pt_ui_domain_stat_delta_up(inputs)
	if (locale === "ru") return ru_ui_domain_stat_delta_up(inputs)
	if (locale === "sv") return sv_ui_domain_stat_delta_up(inputs)
	if (locale === "tr") return tr_ui_domain_stat_delta_up(inputs)
	if (locale === "zh") return zh_ui_domain_stat_delta_up(inputs)
	if (locale === "ja") return ja_ui_domain_stat_delta_up(inputs)
	return en_ui_domain_stat_delta_up(inputs)
});

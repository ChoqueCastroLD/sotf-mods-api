/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ percent: NonNullable<unknown>, days: NonNullable<unknown> }} Ui_Domain_Stat_Delta_DownInputs */

const en_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("en", i?.days, {});
	const days__number = registry.number("en", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Down ${i?.percent} in ${days__number} day`);
	return /** @type {LocalizedString} */ (`Down ${i?.percent} in ${days__number} days`)
	
};

const es_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("es", i?.days, {});
	const days__number = registry.number("es", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Baja ${i?.percent} en ${days__number} día`);
	return /** @type {LocalizedString} */ (`Baja ${i?.percent} en ${days__number} días`)
	
};

const de_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("de", i?.days, {});
	const days__number = registry.number("de", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Minus ${i?.percent} in ${days__number} Tag`);
	return /** @type {LocalizedString} */ (`Minus ${i?.percent} in ${days__number} Tagen`)
	
};

const fr_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("fr", i?.days, {});
	const days__number = registry.number("fr", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`En baisse de ${i?.percent} sur ${days__number} jour`);
	return /** @type {LocalizedString} */ (`En baisse de ${i?.percent} sur ${days__number} jours`)
	
};

const it_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("it", i?.days, {});
	const days__number = registry.number("it", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`In calo del ${i?.percent} in ${days__number} giorno`);
	return /** @type {LocalizedString} */ (`In calo del ${i?.percent} in ${days__number} giorni`)
	
};

const nl_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("nl", i?.days, {});
	const days__number = registry.number("nl", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${i?.percent} gedaald in ${days__number} dag`);
	return /** @type {LocalizedString} */ (`${i?.percent} gedaald in ${days__number} dagen`)
	
};

const pl_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("pl", i?.days, {});
	const days__number = registry.number("pl", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Spadek o ${i?.percent} w ${days__number} dzień`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`Spadek o ${i?.percent} w ${days__number} dni`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`Spadek o ${i?.percent} w ${days__number} dni`);
	return /** @type {LocalizedString} */ (`Spadek o ${i?.percent} w ${days__number} dnia`)
	
};

const pt_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("pt", i?.days, {});
	const days__number = registry.number("pt", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Queda de ${i?.percent} em ${days__number} dia`);
	return /** @type {LocalizedString} */ (`Queda de ${i?.percent} em ${days__number} dias`)
	
};

const ru_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("ru", i?.days, {});
	const days__number = registry.number("ru", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Снижение на ${i?.percent} за ${days__number} день`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`Снижение на ${i?.percent} за ${days__number} дня`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`Снижение на ${i?.percent} за ${days__number} дней`);
	return /** @type {LocalizedString} */ (`Снижение на ${i?.percent} за ${days__number} дня`)
	
};

const sv_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("sv", i?.days, {});
	const days__number = registry.number("sv", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Ned ${i?.percent} på ${days__number} dag`);
	return /** @type {LocalizedString} */ (`Ned ${i?.percent} på ${days__number} dagar`)
	
};

const tr_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("tr", i?.days, {});
	const days__number = registry.number("tr", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} günde ${i?.percent} düşüş`);
	return /** @type {LocalizedString} */ (`${days__number} günde ${i?.percent} düşüş`)
	
};

const zh_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {
	const days__plural = registry.plural("zh", i?.days, {});
	const days__number = registry.number("zh", i?.days, {});return /** @type {LocalizedString} */ (`${days__number} 天内下降 ${i?.percent}`)
};

const ja_ui_domain_stat_delta_down = /** @type {(inputs: Ui_Domain_Stat_Delta_DownInputs) => LocalizedString} */ (i) => {
	const days__plural = registry.plural("ja", i?.days, {});
	const days__number = registry.number("ja", i?.days, {});return /** @type {LocalizedString} */ (`${days__number} 日間で ${i?.percent} 減少`)
};

/**
* | days__plural | output |
* | --- | --- |
* | "one" | "Down {percent} in {days__number} day" |
* | * | "Down {percent} in {days__number} days" |
*
* @param {Ui_Domain_Stat_Delta_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_stat_delta_down = /** @type {((inputs: Ui_Domain_Stat_Delta_DownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Stat_Delta_DownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_stat_delta_down(inputs)
	if (locale === "de") return de_ui_domain_stat_delta_down(inputs)
	if (locale === "fr") return fr_ui_domain_stat_delta_down(inputs)
	if (locale === "it") return it_ui_domain_stat_delta_down(inputs)
	if (locale === "nl") return nl_ui_domain_stat_delta_down(inputs)
	if (locale === "pl") return pl_ui_domain_stat_delta_down(inputs)
	if (locale === "pt") return pt_ui_domain_stat_delta_down(inputs)
	if (locale === "ru") return ru_ui_domain_stat_delta_down(inputs)
	if (locale === "sv") return sv_ui_domain_stat_delta_down(inputs)
	if (locale === "tr") return tr_ui_domain_stat_delta_down(inputs)
	if (locale === "zh") return zh_ui_domain_stat_delta_down(inputs)
	if (locale === "ja") return ja_ui_domain_stat_delta_down(inputs)
	return en_ui_domain_stat_delta_down(inputs)
});

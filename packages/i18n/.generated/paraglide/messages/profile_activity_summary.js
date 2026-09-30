/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, days: NonNullable<unknown>, from: NonNullable<unknown>, to: NonNullable<unknown> }} Profile_Activity_SummaryInputs */

const en_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	const days__plural = registry.plural("en", i?.days, {});
	const days__number = registry.number("en", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`No contributions on ${days__number} day between ${i?.from} and ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No contributions on ${days__number} days between ${i?.from} and ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribution on ${days__number} day between ${i?.from} and ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribution on ${days__number} days between ${i?.from} and ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contributions on ${days__number} day between ${i?.from} and ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} contributions on ${days__number} days between ${i?.from} and ${i?.to}.`)
	
};

const es_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	const days__plural = registry.plural("es", i?.days, {});
	const days__number = registry.number("es", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`Ninguna contribución en ${days__number} día entre el ${i?.from} y el ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ninguna contribución en ${days__number} días entre el ${i?.from} y el ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribución en ${days__number} día entre el ${i?.from} y el ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribución en ${days__number} días entre el ${i?.from} y el ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribuciones en ${days__number} día entre el ${i?.from} y el ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} contribuciones en ${days__number} días entre el ${i?.from} y el ${i?.to}.`)
	
};

const de_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	const days__plural = registry.plural("de", i?.days, {});
	const days__number = registry.number("de", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`Keine Beiträge an ${days__number} Tag zwischen ${i?.from} und ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Keine Beiträge an ${days__number} Tagen zwischen ${i?.from} und ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Beitrag an ${days__number} Tag zwischen ${i?.from} und ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Beitrag an ${days__number} Tagen zwischen ${i?.from} und ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Beiträge an ${days__number} Tag zwischen ${i?.from} und ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} Beiträge an ${days__number} Tagen zwischen ${i?.from} und ${i?.to}.`)
	
};

const fr_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	const days__plural = registry.plural("fr", i?.days, {});
	const days__number = registry.number("fr", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`Aucune contribution sur ${days__number} jour entre le ${i?.from} et le ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucune contribution sur ${days__number} jours entre le ${i?.from} et le ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribution sur ${days__number} jour entre le ${i?.from} et le ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribution sur ${days__number} jours entre le ${i?.from} et le ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contributions sur ${days__number} jour entre le ${i?.from} et le ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} contributions sur ${days__number} jours entre le ${i?.from} et le ${i?.to}.`)
	
};

const it_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	const days__plural = registry.plural("it", i?.days, {});
	const days__number = registry.number("it", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`Nessun contributo in ${days__number} giorno tra il ${i?.from} e il ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessun contributo in ${days__number} giorni tra il ${i?.from} e il ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contributo in ${days__number} giorno tra il ${i?.from} e il ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contributo in ${days__number} giorni tra il ${i?.from} e il ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contributi in ${days__number} giorno tra il ${i?.from} e il ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} contributi in ${days__number} giorni tra il ${i?.from} e il ${i?.to}.`)
	
};

const nl_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	const days__plural = registry.plural("nl", i?.days, {});
	const days__number = registry.number("nl", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`Geen bijdragen op ${days__number} dag tussen ${i?.from} en ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Geen bijdragen op ${days__number} dagen tussen ${i?.from} en ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bijdrage op ${days__number} dag tussen ${i?.from} en ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bijdrage op ${days__number} dagen tussen ${i?.from} en ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bijdragen op ${days__number} dag tussen ${i?.from} en ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} bijdragen op ${days__number} dagen tussen ${i?.from} en ${i?.to}.`)
	
};

const pl_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	const days__plural = registry.plural("pl", i?.days, {});
	const days__number = registry.number("pl", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`Brak wkładów w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`);
	if (count__exact === "0" && days__plural === "few") return /** @type {LocalizedString} */ (`Brak wkładów w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	if (count__exact === "0" && days__plural === "many") return /** @type {LocalizedString} */ (`Brak wkładów w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Brak wkładów w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wkład w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`);
	if (count__plural === "one" && days__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wkład w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	if (count__plural === "one" && days__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wkład w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wkład w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`);
	if (count__plural === "few" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wkłady w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`);
	if (count__plural === "few" && days__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wkłady w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	if (count__plural === "few" && days__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wkłady w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wkłady w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`);
	if (count__plural === "many" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wkładów w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`);
	if (count__plural === "many" && days__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wkładów w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	if (count__plural === "many" && days__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wkładów w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wkładów w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wkładu w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wkładu w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wkładu w ciągu ${days__number} dni od ${i?.from} do ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} wkładu w ciągu ${days__number} dnia od ${i?.from} do ${i?.to}.`)
	
};

const pt_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	const days__plural = registry.plural("pt", i?.days, {});
	const days__number = registry.number("pt", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`Nenhuma contribuição em ${days__number} dia entre ${i?.from} e ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nenhuma contribuição em ${days__number} dias entre ${i?.from} e ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribuição em ${days__number} dia entre ${i?.from} e ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribuição em ${days__number} dias entre ${i?.from} e ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} contribuições em ${days__number} dia entre ${i?.from} e ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} contribuições em ${days__number} dias entre ${i?.from} e ${i?.to}.`)
	
};

const ru_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	const days__plural = registry.plural("ru", i?.days, {});
	const days__number = registry.number("ru", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`Нет вкладов за ${days__number} день с ${i?.from} по ${i?.to}.`);
	if (count__exact === "0" && days__plural === "few") return /** @type {LocalizedString} */ (`Нет вкладов за ${days__number} дня с ${i?.from} по ${i?.to}.`);
	if (count__exact === "0" && days__plural === "many") return /** @type {LocalizedString} */ (`Нет вкладов за ${days__number} дней с ${i?.from} по ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Нет вкладов за ${days__number} дня с ${i?.from} по ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} вклад за ${days__number} день с ${i?.from} по ${i?.to}.`);
	if (count__plural === "one" && days__plural === "few") return /** @type {LocalizedString} */ (`${count__number} вклад за ${days__number} дня с ${i?.from} по ${i?.to}.`);
	if (count__plural === "one" && days__plural === "many") return /** @type {LocalizedString} */ (`${count__number} вклад за ${days__number} дней с ${i?.from} по ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} вклад за ${days__number} дня с ${i?.from} по ${i?.to}.`);
	if (count__plural === "few" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} вклада за ${days__number} день с ${i?.from} по ${i?.to}.`);
	if (count__plural === "few" && days__plural === "few") return /** @type {LocalizedString} */ (`${count__number} вклада за ${days__number} дня с ${i?.from} по ${i?.to}.`);
	if (count__plural === "few" && days__plural === "many") return /** @type {LocalizedString} */ (`${count__number} вклада за ${days__number} дней с ${i?.from} по ${i?.to}.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} вклада за ${days__number} дня с ${i?.from} по ${i?.to}.`);
	if (count__plural === "many" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} вкладов за ${days__number} день с ${i?.from} по ${i?.to}.`);
	if (count__plural === "many" && days__plural === "few") return /** @type {LocalizedString} */ (`${count__number} вкладов за ${days__number} дня с ${i?.from} по ${i?.to}.`);
	if (count__plural === "many" && days__plural === "many") return /** @type {LocalizedString} */ (`${count__number} вкладов за ${days__number} дней с ${i?.from} по ${i?.to}.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} вкладов за ${days__number} дня с ${i?.from} по ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} вклада за ${days__number} день с ${i?.from} по ${i?.to}.`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`${count__number} вклада за ${days__number} дня с ${i?.from} по ${i?.to}.`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`${count__number} вклада за ${days__number} дней с ${i?.from} по ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} вклада за ${days__number} дня с ${i?.from} по ${i?.to}.`)
	
};

const sv_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	const days__plural = registry.plural("sv", i?.days, {});
	const days__number = registry.number("sv", i?.days, {});
	if (count__exact === "0" && days__plural === "one") return /** @type {LocalizedString} */ (`Inga bidrag under ${days__number} dag mellan ${i?.from} och ${i?.to}.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inga bidrag under ${days__number} dagar mellan ${i?.from} och ${i?.to}.`);
	if (count__plural === "one" && days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bidrag under ${days__number} dag mellan ${i?.from} och ${i?.to}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bidrag under ${days__number} dagar mellan ${i?.from} och ${i?.to}.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bidrag under ${days__number} dag mellan ${i?.from} och ${i?.to}.`);
	return /** @type {LocalizedString} */ (`${count__number} bidrag under ${days__number} dagar mellan ${i?.from} och ${i?.to}.`)
	
};

const tr_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	const days__plural = registry.plural("tr", i?.days, {});
	const days__number = registry.number("tr", i?.days, {});
	if (days__plural === "one" && count__exact === "0") return /** @type {LocalizedString} */ (`${i?.from} ile ${i?.to} arasında ${days__number} günde hiç katkı yok.`);
	if (days__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.from} ile ${i?.to} arasında ${days__number} günde ${count__number} katkı.`);
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${i?.from} ile ${i?.to} arasında ${days__number} günde ${count__number} katkı.`);
	if (count__exact === "0") return /** @type {LocalizedString} */ (`${i?.from} ile ${i?.to} arasında ${days__number} günde hiç katkı yok.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.from} ile ${i?.to} arasında ${days__number} günde ${count__number} katkı.`);
	return /** @type {LocalizedString} */ (`${i?.from} ile ${i?.to} arasında ${days__number} günde ${count__number} katkı.`)
	
};

const zh_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	const days__plural = registry.plural("zh", i?.days, {});
	const days__number = registry.number("zh", i?.days, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`${i?.from} 至 ${i?.to} 期间，在 ${days__number} 天里共有零次贡献。`);
	return /** @type {LocalizedString} */ (`${i?.from} 至 ${i?.to} 期间，在 ${days__number} 天里共有 ${count__number} 次贡献。`)
	
};

const ja_profile_activity_summary = /** @type {(inputs: Profile_Activity_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	const days__plural = registry.plural("ja", i?.days, {});
	const days__number = registry.number("ja", i?.days, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`${i?.from}〜${i?.to} の ${days__number} 日間で貢献なし。`);
	return /** @type {LocalizedString} */ (`${i?.from}〜${i?.to} の ${days__number} 日間で貢献 ${count__number} 件。`)
	
};

/**
* | count__exact | count__plural | days__plural | output |
* | --- | --- | --- | --- |
* | "0" | * | "one" | "No contributions on {days__number} day between {from} and {to}." |
* | "0" | * | * | "No contributions on {days__number} days between {from} and {to}." |
* | * | "one" | "one" | "{count__number} contribution on {days__number} day between {from} and {to}." |
* | * | "one" | * | "{count__number} contribution on {days__number} days between {from} and {to}." |
* | * | * | "one" | "{count__number} contributions on {days__number} day between {from} and {to}." |
* | * | * | * | "{count__number} contributions on {days__number} days between {from} and {to}." |
*
* @param {Profile_Activity_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_summary = /** @type {((inputs: Profile_Activity_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_summary(inputs)
	if (locale === "de") return de_profile_activity_summary(inputs)
	if (locale === "fr") return fr_profile_activity_summary(inputs)
	if (locale === "it") return it_profile_activity_summary(inputs)
	if (locale === "nl") return nl_profile_activity_summary(inputs)
	if (locale === "pl") return pl_profile_activity_summary(inputs)
	if (locale === "pt") return pt_profile_activity_summary(inputs)
	if (locale === "ru") return ru_profile_activity_summary(inputs)
	if (locale === "sv") return sv_profile_activity_summary(inputs)
	if (locale === "tr") return tr_profile_activity_summary(inputs)
	if (locale === "zh") return zh_profile_activity_summary(inputs)
	if (locale === "ja") return ja_profile_activity_summary(inputs)
	return en_profile_activity_summary(inputs)
});

/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Profile_Badges_SummaryInputs */

const en_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No badges yet.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} badge earned.`);
	return /** @type {LocalizedString} */ (`${count__number} badges earned.`)
	
};

const es_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aún no hay insignias.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} insignia conseguida.`);
	return /** @type {LocalizedString} */ (`${count__number} insignias conseguidas.`)
	
};

const de_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Noch keine Abzeichen.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Abzeichen verdient.`);
	return /** @type {LocalizedString} */ (`${count__number} Abzeichen verdient.`)
	
};

const fr_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucun badge pour l’instant.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} badge obtenu.`);
	return /** @type {LocalizedString} */ (`${count__number} badges obtenus.`)
	
};

const it_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ancora nessun distintivo.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} distintivo ottenuto.`);
	return /** @type {LocalizedString} */ (`${count__number} distintivi ottenuti.`)
	
};

const nl_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nog geen badges.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} badge verdiend.`);
	return /** @type {LocalizedString} */ (`${count__number} badges verdiend.`)
	
};

const pl_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Brak odznak.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Zdobyto ${count__number} odznakę.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Zdobyto ${count__number} odznaki.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Zdobyto ${count__number} odznak.`);
	return /** @type {LocalizedString} */ (`Zdobyto ${count__number} odznaki.`)
	
};

const pt_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nenhuma insígnia ainda.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} insígnia conquistada.`);
	return /** @type {LocalizedString} */ (`${count__number} insígnias conquistadas.`)
	
};

const ru_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Значков пока нет.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Получен ${count__number} значок.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Получено ${count__number} значка.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Получено ${count__number} значков.`);
	return /** @type {LocalizedString} */ (`Получено ${count__number} значка.`)
	
};

const sv_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inga märken än.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} märke intjänat.`);
	return /** @type {LocalizedString} */ (`${count__number} märken intjänade.`)
	
};

const tr_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Henüz rozet yok.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} rozet kazanıldı.`);
	return /** @type {LocalizedString} */ (`${count__number} rozet kazanıldı.`)
	
};

const zh_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`尚未获得徽章。`);
	return /** @type {LocalizedString} */ (`已获得 ${count__number} 枚徽章。`)
	
};

const ja_profile_badges_summary = /** @type {(inputs: Profile_Badges_SummaryInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`まだバッジはありません。`);
	return /** @type {LocalizedString} */ (`バッジを ${count__number} 個獲得。`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No badges yet." |
* | * | "one" | "{count__number} badge earned." |
* | * | * | "{count__number} badges earned." |
*
* @param {Profile_Badges_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badges_summary = /** @type {((inputs: Profile_Badges_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badges_summary(inputs)
	if (locale === "de") return de_profile_badges_summary(inputs)
	if (locale === "fr") return fr_profile_badges_summary(inputs)
	if (locale === "it") return it_profile_badges_summary(inputs)
	if (locale === "nl") return nl_profile_badges_summary(inputs)
	if (locale === "pl") return pl_profile_badges_summary(inputs)
	if (locale === "pt") return pt_profile_badges_summary(inputs)
	if (locale === "ru") return ru_profile_badges_summary(inputs)
	if (locale === "sv") return sv_profile_badges_summary(inputs)
	if (locale === "tr") return tr_profile_badges_summary(inputs)
	if (locale === "zh") return zh_profile_badges_summary(inputs)
	if (locale === "ja") return ja_profile_badges_summary(inputs)
	return en_profile_badges_summary(inputs)
});

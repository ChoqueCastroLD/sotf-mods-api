/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, total: NonNullable<unknown> }} Profile_Badges_Summary_OfInputs */

const en_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No badges yet of ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} badge of ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} badges of ${i?.total}.`)
	
};

const es_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ninguna insignia de ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} insignia de ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} insignias de ${i?.total}.`)
	
};

const de_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Keine Abzeichen von ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Abzeichen von ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} Abzeichen von ${i?.total}.`)
	
};

const fr_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucun badge sur ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} badge sur ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} badges sur ${i?.total}.`)
	
};

const it_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessun distintivo su ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} distintivo su ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} distintivi su ${i?.total}.`)
	
};

const nl_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Geen badges van ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} badge van ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} badges van ${i?.total}.`)
	
};

const pl_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Brak odznak z ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} odznaka z ${i?.total}.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} odznaki z ${i?.total}.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} odznak z ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} odznaki z ${i?.total}.`)
	
};

const pt_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nenhuma insígnia de ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} insígnia de ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} insígnias de ${i?.total}.`)
	
};

const ru_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ни одного значка из ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} значок из ${i?.total}.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} значка из ${i?.total}.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} значков из ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} значка из ${i?.total}.`)
	
};

const sv_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inga märken av ${i?.total}.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} märke av ${i?.total}.`);
	return /** @type {LocalizedString} */ (`${count__number} märken av ${i?.total}.`)
	
};

const tr_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`${i?.total} rozetten hiçbiri kazanılmadı.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.total} rozetten ${count__number} tanesi kazanıldı.`);
	return /** @type {LocalizedString} */ (`${i?.total} rozetten ${count__number} tanesi kazanıldı.`)
	
};

const zh_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`尚未获得徽章，共 ${i?.total} 枚。`);
	return /** @type {LocalizedString} */ (`已获得 ${count__number} 枚，共 ${i?.total} 枚。`)
	
};

const ja_profile_badges_summary_of = /** @type {(inputs: Profile_Badges_Summary_OfInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`${i?.total} 個中 0 個。`);
	return /** @type {LocalizedString} */ (`${i?.total} 個中 ${count__number} 個。`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No badges yet of {total}." |
* | * | "one" | "{count__number} badge of {total}." |
* | * | * | "{count__number} badges of {total}." |
*
* @param {Profile_Badges_Summary_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badges_summary_of = /** @type {((inputs: Profile_Badges_Summary_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_Summary_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badges_summary_of(inputs)
	if (locale === "de") return de_profile_badges_summary_of(inputs)
	if (locale === "fr") return fr_profile_badges_summary_of(inputs)
	if (locale === "it") return it_profile_badges_summary_of(inputs)
	if (locale === "nl") return nl_profile_badges_summary_of(inputs)
	if (locale === "pl") return pl_profile_badges_summary_of(inputs)
	if (locale === "pt") return pt_profile_badges_summary_of(inputs)
	if (locale === "ru") return ru_profile_badges_summary_of(inputs)
	if (locale === "sv") return sv_profile_badges_summary_of(inputs)
	if (locale === "tr") return tr_profile_badges_summary_of(inputs)
	if (locale === "zh") return zh_profile_badges_summary_of(inputs)
	if (locale === "ja") return ja_profile_badges_summary_of(inputs)
	return en_profile_badges_summary_of(inputs)
});

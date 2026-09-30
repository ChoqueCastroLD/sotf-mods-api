/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, reviews: NonNullable<unknown>, reports: NonNullable<unknown> }} Profile_Meta_Description_MemberInputs */

const en_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("en", i?.reviews, {});
	const reviews__number = registry.number("en", i?.reviews, {});
	const reports__plural = registry.plural("en", i?.reports, {});
	const reports__number = registry.number("en", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} on SOTF Mods, the Sons of the Forest modding community: ${reviews__number} review and ${reports__number} field report.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} on SOTF Mods, the Sons of the Forest modding community: ${reviews__number} review and ${reports__number} field reports.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} on SOTF Mods, the Sons of the Forest modding community: ${reviews__number} reviews and ${reports__number} field report.`);
	return /** @type {LocalizedString} */ (`${i?.name} on SOTF Mods, the Sons of the Forest modding community: ${reviews__number} reviews and ${reports__number} field reports.`)
	
};

const es_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("es", i?.reviews, {});
	const reviews__number = registry.number("es", i?.reviews, {});
	const reports__plural = registry.plural("es", i?.reports, {});
	const reports__number = registry.number("es", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} en SOTF Mods, la comunidad de mods de Sons of the Forest: ${reviews__number} reseña y ${reports__number} reporte de campo.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} en SOTF Mods, la comunidad de mods de Sons of the Forest: ${reviews__number} reseña y ${reports__number} reportes de campo.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} en SOTF Mods, la comunidad de mods de Sons of the Forest: ${reviews__number} reseñas y ${reports__number} reporte de campo.`);
	return /** @type {LocalizedString} */ (`${i?.name} en SOTF Mods, la comunidad de mods de Sons of the Forest: ${reviews__number} reseñas y ${reports__number} reportes de campo.`)
	
};

const de_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("de", i?.reviews, {});
	const reviews__number = registry.number("de", i?.reviews, {});
	const reports__plural = registry.plural("de", i?.reports, {});
	const reports__number = registry.number("de", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} auf SOTF Mods, der Modding-Community für Sons of the Forest: ${reviews__number} Bewertung und ${reports__number} Feldbericht.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} auf SOTF Mods, der Modding-Community für Sons of the Forest: ${reviews__number} Bewertung und ${reports__number} Feldberichte.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} auf SOTF Mods, der Modding-Community für Sons of the Forest: ${reviews__number} Bewertungen und ${reports__number} Feldbericht.`);
	return /** @type {LocalizedString} */ (`${i?.name} auf SOTF Mods, der Modding-Community für Sons of the Forest: ${reviews__number} Bewertungen und ${reports__number} Feldberichte.`)
	
};

const fr_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("fr", i?.reviews, {});
	const reviews__number = registry.number("fr", i?.reviews, {});
	const reports__plural = registry.plural("fr", i?.reports, {});
	const reports__number = registry.number("fr", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} sur SOTF Mods, la communauté de modding de Sons of the Forest : ${reviews__number} avis et ${reports__number} rapport de terrain.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} sur SOTF Mods, la communauté de modding de Sons of the Forest : ${reviews__number} avis et ${reports__number} rapports de terrain.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} sur SOTF Mods, la communauté de modding de Sons of the Forest : ${reviews__number} avis et ${reports__number} rapport de terrain.`);
	return /** @type {LocalizedString} */ (`${i?.name} sur SOTF Mods, la communauté de modding de Sons of the Forest : ${reviews__number} avis et ${reports__number} rapports de terrain.`)
	
};

const it_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("it", i?.reviews, {});
	const reviews__number = registry.number("it", i?.reviews, {});
	const reports__plural = registry.plural("it", i?.reports, {});
	const reports__number = registry.number("it", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} su SOTF Mods, la community di modding di Sons of the Forest: ${reviews__number} recensione e ${reports__number} rapporto sul campo.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} su SOTF Mods, la community di modding di Sons of the Forest: ${reviews__number} recensione e ${reports__number} rapporti sul campo.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} su SOTF Mods, la community di modding di Sons of the Forest: ${reviews__number} recensioni e ${reports__number} rapporto sul campo.`);
	return /** @type {LocalizedString} */ (`${i?.name} su SOTF Mods, la community di modding di Sons of the Forest: ${reviews__number} recensioni e ${reports__number} rapporti sul campo.`)
	
};

const nl_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("nl", i?.reviews, {});
	const reviews__number = registry.number("nl", i?.reviews, {});
	const reports__plural = registry.plural("nl", i?.reports, {});
	const reports__number = registry.number("nl", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} op SOTF Mods, de moddingcommunity van Sons of the Forest: ${reviews__number} review en ${reports__number} veldrapport.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} op SOTF Mods, de moddingcommunity van Sons of the Forest: ${reviews__number} review en ${reports__number} veldrapporten.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} op SOTF Mods, de moddingcommunity van Sons of the Forest: ${reviews__number} reviews en ${reports__number} veldrapport.`);
	return /** @type {LocalizedString} */ (`${i?.name} op SOTF Mods, de moddingcommunity van Sons of the Forest: ${reviews__number} reviews en ${reports__number} veldrapporten.`)
	
};

const pl_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("pl", i?.reviews, {});
	const reviews__number = registry.number("pl", i?.reviews, {});
	const reports__plural = registry.plural("pl", i?.reports, {});
	const reports__number = registry.number("pl", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzja i ${reports__number} raport terenowy.`);
	if (reviews__plural === "one" && reports__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzja i ${reports__number} raporty terenowe.`);
	if (reviews__plural === "one" && reports__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzja i ${reports__number} raportów terenowych.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzja i ${reports__number} raportu terenowego.`);
	if (reviews__plural === "few" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzje i ${reports__number} raport terenowy.`);
	if (reviews__plural === "few" && reports__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzje i ${reports__number} raporty terenowe.`);
	if (reviews__plural === "few" && reports__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzje i ${reports__number} raportów terenowych.`);
	if (reviews__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzje i ${reports__number} raportu terenowego.`);
	if (reviews__plural === "many" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji i ${reports__number} raport terenowy.`);
	if (reviews__plural === "many" && reports__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji i ${reports__number} raporty terenowe.`);
	if (reviews__plural === "many" && reports__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji i ${reports__number} raportów terenowych.`);
	if (reviews__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji i ${reports__number} raportu terenowego.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji i ${reports__number} raport terenowy.`);
	if (reports__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji i ${reports__number} raporty terenowe.`);
	if (reports__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji i ${reports__number} raportów terenowych.`);
	return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji i ${reports__number} raportu terenowego.`)
	
};

const pt_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("pt", i?.reviews, {});
	const reviews__number = registry.number("pt", i?.reviews, {});
	const reports__plural = registry.plural("pt", i?.reports, {});
	const reports__number = registry.number("pt", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} no SOTF Mods, a comunidade de mods de Sons of the Forest: ${reviews__number} avaliação e ${reports__number} relatório de campo.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} no SOTF Mods, a comunidade de mods de Sons of the Forest: ${reviews__number} avaliação e ${reports__number} relatórios de campo.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} no SOTF Mods, a comunidade de mods de Sons of the Forest: ${reviews__number} avaliações e ${reports__number} relatório de campo.`);
	return /** @type {LocalizedString} */ (`${i?.name} no SOTF Mods, a comunidade de mods de Sons of the Forest: ${reviews__number} avaliações e ${reports__number} relatórios de campo.`)
	
};

const ru_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("ru", i?.reviews, {});
	const reviews__number = registry.number("ru", i?.reviews, {});
	const reports__plural = registry.plural("ru", i?.reports, {});
	const reports__number = registry.number("ru", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыв и ${reports__number} полевой отчёт.`);
	if (reviews__plural === "one" && reports__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыв и ${reports__number} полевых отчёта.`);
	if (reviews__plural === "one" && reports__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыв и ${reports__number} полевых отчётов.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыв и ${reports__number} полевого отчёта.`);
	if (reviews__plural === "few" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва и ${reports__number} полевой отчёт.`);
	if (reviews__plural === "few" && reports__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва и ${reports__number} полевых отчёта.`);
	if (reviews__plural === "few" && reports__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва и ${reports__number} полевых отчётов.`);
	if (reviews__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва и ${reports__number} полевого отчёта.`);
	if (reviews__plural === "many" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзывов и ${reports__number} полевой отчёт.`);
	if (reviews__plural === "many" && reports__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзывов и ${reports__number} полевых отчёта.`);
	if (reviews__plural === "many" && reports__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзывов и ${reports__number} полевых отчётов.`);
	if (reviews__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзывов и ${reports__number} полевого отчёта.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва и ${reports__number} полевой отчёт.`);
	if (reports__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва и ${reports__number} полевых отчёта.`);
	if (reports__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва и ${reports__number} полевых отчётов.`);
	return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва и ${reports__number} полевого отчёта.`)
	
};

const sv_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("sv", i?.reviews, {});
	const reviews__number = registry.number("sv", i?.reviews, {});
	const reports__plural = registry.plural("sv", i?.reports, {});
	const reports__number = registry.number("sv", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} på SOTF Mods, moddinggemenskapen för Sons of the Forest: ${reviews__number} recension och ${reports__number} fältrapport.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} på SOTF Mods, moddinggemenskapen för Sons of the Forest: ${reviews__number} recension och ${reports__number} fältrapporter.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} på SOTF Mods, moddinggemenskapen för Sons of the Forest: ${reviews__number} recensioner och ${reports__number} fältrapport.`);
	return /** @type {LocalizedString} */ (`${i?.name} på SOTF Mods, moddinggemenskapen för Sons of the Forest: ${reviews__number} recensioner och ${reports__number} fältrapporter.`)
	
};

const tr_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("tr", i?.reviews, {});
	const reviews__number = registry.number("tr", i?.reviews, {});
	const reports__plural = registry.plural("tr", i?.reports, {});
	const reports__number = registry.number("tr", i?.reports, {});
	if (reviews__plural === "one" && reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest mod topluluğu SOTF Mods’ta: ${reviews__number} inceleme ve ${reports__number} saha raporu.`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest mod topluluğu SOTF Mods’ta: ${reviews__number} inceleme ve ${reports__number} saha raporu.`);
	if (reports__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest mod topluluğu SOTF Mods’ta: ${reviews__number} inceleme ve ${reports__number} saha raporu.`);
	return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest mod topluluğu SOTF Mods’ta: ${reviews__number} inceleme ve ${reports__number} saha raporu.`)
	
};

const zh_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {
	const reviews__plural = registry.plural("zh", i?.reviews, {});
	const reviews__number = registry.number("zh", i?.reviews, {});
	const reports__plural = registry.plural("zh", i?.reports, {});
	const reports__number = registry.number("zh", i?.reports, {});return /** @type {LocalizedString} */ (`${i?.name} 在 SOTF Mods（Sons of the Forest 模组社区）：${reviews__number} 条评价，${reports__number} 份实地报告。`)
};

const ja_profile_meta_description_member = /** @type {(inputs: Profile_Meta_Description_MemberInputs) => LocalizedString} */ (i) => {
	const reviews__plural = registry.plural("ja", i?.reviews, {});
	const reviews__number = registry.number("ja", i?.reviews, {});
	const reports__plural = registry.plural("ja", i?.reports, {});
	const reports__number = registry.number("ja", i?.reports, {});return /** @type {LocalizedString} */ (`Sons of the Forest の MOD コミュニティ SOTF Mods の ${i?.name}：レビュー ${reviews__number} 件、フィールドレポート ${reports__number} 件。`)
};

/**
* | reviews__plural | reports__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} review and {reports__number} field report." |
* | "one" | * | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} review and {reports__number} field reports." |
* | * | "one" | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} reviews and {reports__number} field report." |
* | * | * | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} reviews and {reports__number} field reports." |
*
* @param {Profile_Meta_Description_MemberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_meta_description_member = /** @type {((inputs: Profile_Meta_Description_MemberInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Description_MemberInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_meta_description_member(inputs)
	if (locale === "de") return de_profile_meta_description_member(inputs)
	if (locale === "fr") return fr_profile_meta_description_member(inputs)
	if (locale === "it") return it_profile_meta_description_member(inputs)
	if (locale === "nl") return nl_profile_meta_description_member(inputs)
	if (locale === "pl") return pl_profile_meta_description_member(inputs)
	if (locale === "pt") return pt_profile_meta_description_member(inputs)
	if (locale === "ru") return ru_profile_meta_description_member(inputs)
	if (locale === "sv") return sv_profile_meta_description_member(inputs)
	if (locale === "tr") return tr_profile_meta_description_member(inputs)
	if (locale === "zh") return zh_profile_meta_description_member(inputs)
	if (locale === "ja") return ja_profile_meta_description_member(inputs)
	return en_profile_meta_description_member(inputs)
});

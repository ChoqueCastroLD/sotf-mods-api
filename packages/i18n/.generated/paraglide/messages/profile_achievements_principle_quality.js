/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Principle_QualityInputs */

const en_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP comes from helping others: useful reviews, accurate field reports and solved problems. Downloads never give XP.`)
};

const es_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La XP viene de ayudar a los demás: reseñas útiles, reportes de campo acertados y problemas resueltos. Las descargas nunca dan XP.`)
};

const de_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP gibt es fürs Helfen: nützliche Bewertungen, zutreffende Feldberichte und gelöste Probleme. Downloads bringen nie XP.`)
};

const fr_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’XP vient de l’aide apportée aux autres : avis utiles, rapports de terrain justes et problèmes résolus. Les téléchargements ne rapportent jamais d’XP.`)
};

const it_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’XP arriva aiutando gli altri: recensioni utili, rapporti sul campo accurati e problemi risolti. I download non danno mai XP.`)
};

const nl_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP krijg je door anderen te helpen: nuttige reviews, kloppende veldrapporten en opgeloste problemen. Downloads leveren nooit XP op.`)
};

const pl_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP zdobywa się, pomagając innym: przydatnymi recenzjami, trafnymi raportami terenowymi i rozwiązanymi problemami. Pobrania nigdy nie dają XP.`)
};

const pt_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O XP vem de ajudar os outros: avaliações úteis, relatórios de campo certeiros e problemas resolvidos. Downloads nunca dão XP.`)
};

const ru_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP дают за помощь другим: полезные отзывы, точные полевые отчёты и решённые проблемы. Скачивания никогда не дают XP.`)
};

const sv_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP kommer från att hjälpa andra: användbara recensioner, träffsäkra fältrapporter och lösta problem. Nedladdningar ger aldrig XP.`)
};

const tr_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP başkalarına yardım etmekten gelir: faydalı incelemeler, isabetli saha raporları ve çözülen sorunlar. İndirmeler asla XP kazandırmaz.`)
};

const zh_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP 来自帮助他人：有用的评价、准确的实地报告和解决的问题。下载量永远不会带来 XP。`)
};

const ja_profile_achievements_principle_quality = /** @type {(inputs: Profile_Achievements_Principle_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP はほかの人を助けることで得られます：役立つレビュー、正確なフィールドレポート、解決した問題。ダウンロード数で XP は得られません。`)
};

/**
* | output |
* | --- |
* | "XP comes from helping others: useful reviews, accurate field reports and solved problems. Downloads never give XP." |
*
* @param {Profile_Achievements_Principle_QualityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_principle_quality = /** @type {((inputs?: Profile_Achievements_Principle_QualityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Principle_QualityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_principle_quality(inputs)
	if (locale === "de") return de_profile_achievements_principle_quality(inputs)
	if (locale === "fr") return fr_profile_achievements_principle_quality(inputs)
	if (locale === "it") return it_profile_achievements_principle_quality(inputs)
	if (locale === "nl") return nl_profile_achievements_principle_quality(inputs)
	if (locale === "pl") return pl_profile_achievements_principle_quality(inputs)
	if (locale === "pt") return pt_profile_achievements_principle_quality(inputs)
	if (locale === "ru") return ru_profile_achievements_principle_quality(inputs)
	if (locale === "sv") return sv_profile_achievements_principle_quality(inputs)
	if (locale === "tr") return tr_profile_achievements_principle_quality(inputs)
	if (locale === "zh") return zh_profile_achievements_principle_quality(inputs)
	if (locale === "ja") return ja_profile_achievements_principle_quality(inputs)
	return en_profile_achievements_principle_quality(inputs)
});

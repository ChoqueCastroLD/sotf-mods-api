/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_DescriptionInputs */

const en_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create and run Mod Jams: schedule, rules, categories, phases and entry moderation.`)
};

const es_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea y dirige Mod Jams: calendario, reglas, categorías, fases y moderación de participaciones.`)
};

const de_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Jams erstellen und betreiben: Zeitplan, Regeln, Kategorien, Phasen und Moderation der Beiträge.`)
};

const fr_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez et pilotez des Mod Jams : calendrier, règles, catégories, phases et modération des participations.`)
};

const it_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea e gestisci i Mod Jam: calendario, regole, categorie, fasi e moderazione delle iscrizioni.`)
};

const nl_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak en beheer Mod Jams: planning, regels, categorieën, fases en moderatie van inzendingen.`)
};

const pl_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórz i prowadź Mod Jamy: harmonogram, zasady, kategorie, fazy i moderację zgłoszeń.`)
};

const pt_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie e conduza Mod Jams: cronograma, regras, categorias, fases e moderação das inscrições.`)
};

const ru_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создавайте и ведите мод-джемы: расписание, правила, категории, фазы и модерация работ.`)
};

const sv_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa och driv Mod Jams: schema, regler, kategorier, faser och moderering av bidrag.`)
};

const tr_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam'leri oluşturun ve yönetin: takvim, kurallar, kategoriler, aşamalar ve başvuru denetimi.`)
};

const zh_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建并运营 Mod Jam：日程、规则、类别、阶段和作品审核。`)
};

const ja_jams_admin_description = /** @type {(inputs: Jams_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ジャムの作成と運営：スケジュール、ルール、カテゴリ、フェーズ、作品のモデレーション。`)
};

/**
* | output |
* | --- |
* | "Create and run Mod Jams: schedule, rules, categories, phases and entry moderation." |
*
* @param {Jams_Admin_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_description = /** @type {((inputs?: Jams_Admin_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_description(inputs)
	if (locale === "de") return de_jams_admin_description(inputs)
	if (locale === "fr") return fr_jams_admin_description(inputs)
	if (locale === "it") return it_jams_admin_description(inputs)
	if (locale === "nl") return nl_jams_admin_description(inputs)
	if (locale === "pl") return pl_jams_admin_description(inputs)
	if (locale === "pt") return pt_jams_admin_description(inputs)
	if (locale === "ru") return ru_jams_admin_description(inputs)
	if (locale === "sv") return sv_jams_admin_description(inputs)
	if (locale === "tr") return tr_jams_admin_description(inputs)
	if (locale === "zh") return zh_jams_admin_description(inputs)
	if (locale === "ja") return ja_jams_admin_description(inputs)
	return en_jams_admin_description(inputs)
});

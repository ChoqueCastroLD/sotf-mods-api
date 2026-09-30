/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Tiers_IntroInputs */

const en_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creators climb tiers automatically with the lifetime downloads of all their mods, history before v2 included. Each tier adds a stamp to the profile and a frame to the avatar.`)
};

const es_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los creadores suben de nivel automáticamente con las descargas totales de todos sus mods, incluido el histórico anterior a v2. Cada nivel añade un sello al perfil y un marco al avatar.`)
};

const de_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller steigen automatisch mit den Gesamt-Downloads aller ihrer Mods auf, inklusive der Zeit vor v2. Jede Stufe bringt einen Stempel im Profil und einen Rahmen um den Avatar.`)
};

const fr_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les créateurs montent de palier automatiquement grâce au total des téléchargements de tous leurs mods, historique d’avant la v2 compris. Chaque palier ajoute un tampon au profil et un cadre à l’avatar.`)
};

const it_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I creatori salgono di livello automaticamente con i download totali di tutte le loro mod, storico precedente alla v2 incluso. Ogni livello aggiunge un timbro al profilo e una cornice all’avatar.`)
};

const nl_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers stijgen automatisch in niveau met het totaal aantal downloads van al hun mods, inclusief de geschiedenis van vóór v2. Elk niveau voegt een stempel aan het profiel en een rand om de avatar toe.`)
};

const pl_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy awansują automatycznie dzięki łącznej liczbie pobrań wszystkich swoich modów, łącznie z historią sprzed v2. Każdy poziom dodaje pieczątkę do profilu i ramkę wokół awatara.`)
};

const pt_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores sobem de nível automaticamente com o total de downloads de todos os seus mods, incluindo o histórico anterior à v2. Cada nível adiciona um carimbo ao perfil e uma moldura ao avatar.`)
};

const ru_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы автоматически растут в уровне по сумме скачиваний всех своих модов, включая историю до v2. Каждый уровень добавляет штамп в профиль и рамку к аватару.`)
};

const sv_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare klättrar automatiskt i nivå med det totala antalet nedladdningar av alla sina moddar, historiken före v2 inräknad. Varje nivå ger en stämpel på profilen och en ram runt avataren.`)
};

const tr_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üreticiler, v2 öncesi geçmiş dahil tüm modlarının toplam indirme sayısıyla otomatik olarak seviye atlar. Her seviye profile bir damga ve avatara bir çerçeve ekler.`)
};

const zh_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者会根据其全部模组的累计下载量（含 v2 之前的历史）自动升段。每个段位都会在个人主页添加印章，并为头像加上边框。`)
};

const ja_profile_achievements_tiers_intro = /** @type {(inputs: Profile_Achievements_Tiers_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターは、v2 以前の履歴も含めた全 MOD の累計ダウンロード数で自動的にティアが上がります。ティアごとにプロフィールのスタンプとアバターの枠が追加されます。`)
};

/**
* | output |
* | --- |
* | "Creators climb tiers automatically with the lifetime downloads of all their mods, history before v2 included. Each tier adds a stamp to the profile and a fra..." |
*
* @param {Profile_Achievements_Tiers_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_tiers_intro = /** @type {((inputs?: Profile_Achievements_Tiers_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Tiers_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_tiers_intro(inputs)
	if (locale === "de") return de_profile_achievements_tiers_intro(inputs)
	if (locale === "fr") return fr_profile_achievements_tiers_intro(inputs)
	if (locale === "it") return it_profile_achievements_tiers_intro(inputs)
	if (locale === "nl") return nl_profile_achievements_tiers_intro(inputs)
	if (locale === "pl") return pl_profile_achievements_tiers_intro(inputs)
	if (locale === "pt") return pt_profile_achievements_tiers_intro(inputs)
	if (locale === "ru") return ru_profile_achievements_tiers_intro(inputs)
	if (locale === "sv") return sv_profile_achievements_tiers_intro(inputs)
	if (locale === "tr") return tr_profile_achievements_tiers_intro(inputs)
	if (locale === "zh") return zh_profile_achievements_tiers_intro(inputs)
	if (locale === "ja") return ja_profile_achievements_tiers_intro(inputs)
	return en_profile_achievements_tiers_intro(inputs)
});

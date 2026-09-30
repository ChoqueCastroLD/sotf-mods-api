/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Milestones_IntroInputs */

const en_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every mod celebrates its download milestones, counted back to its first day. They appear as a timeline on the mod page and the biggest ones are announced on Discord.`)
};

const es_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada mod celebra sus hitos de descargas, contados desde su primer día. Aparecen como línea de tiempo en la página del mod y los más grandes se anuncian en Discord.`)
};

const de_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Mod feiert seine Download-Meilensteine, gezählt ab dem ersten Tag. Sie erscheinen als Zeitleiste auf der Mod-Seite, die größten werden auf Discord verkündet.`)
};

const fr_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque mod célèbre ses jalons de téléchargements, comptés depuis son premier jour. Ils apparaissent sur une frise dans la page du mod et les plus importants sont annoncés sur Discord.`)
};

const it_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni mod festeggia i suoi traguardi di download, contati dal primo giorno. Appaiono come cronologia nella pagina della mod e i più grandi vengono annunciati su Discord.`)
};

const nl_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke mod viert zijn downloadmijlpalen, geteld vanaf de eerste dag. Ze verschijnen als tijdlijn op de modpagina en de grootste worden op Discord aangekondigd.`)
};

const pl_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy mod świętuje swoje kamienie milowe pobrań, liczone od pierwszego dnia. Widać je na osi czasu na stronie moda, a największe są ogłaszane na Discordzie.`)
};

const pt_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada mod celebra seus marcos de downloads, contados desde o primeiro dia. Eles aparecem como linha do tempo na página do mod e os maiores são anunciados no Discord.`)
};

const ru_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каждый мод отмечает вехи по скачиваниям, считая с первого дня. Они показаны на временной шкале на странице мода, а самые крупные объявляются в Discord.`)
};

const sv_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje modd firar sina nedladdningsmilstolpar, räknade från första dagen. De visas som en tidslinje på moddsidan och de största tillkännages på Discord.`)
};

const tr_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her mod, ilk gününden itibaren sayılan indirme kilometre taşlarını kutlar. Mod sayfasında zaman çizelgesi olarak görünürler; en büyükleri Discord’da duyurulur.`)
};

const zh_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每个模组都会庆祝自己的下载里程碑，从第一天开始计算。它们以时间线形式显示在模组页面上，最重要的会在 Discord 公布。`)
};

const ja_profile_achievements_milestones_intro = /** @type {(inputs: Profile_Achievements_Milestones_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各 MOD は初日から数えたダウンロード数のマイルストーンを祝います。MOD ページのタイムラインに表示され、大きなものは Discord で告知されます。`)
};

/**
* | output |
* | --- |
* | "Every mod celebrates its download milestones, counted back to its first day. They appear as a timeline on the mod page and the biggest ones are announced on ..." |
*
* @param {Profile_Achievements_Milestones_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_milestones_intro = /** @type {((inputs?: Profile_Achievements_Milestones_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Milestones_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_milestones_intro(inputs)
	if (locale === "de") return de_profile_achievements_milestones_intro(inputs)
	if (locale === "fr") return fr_profile_achievements_milestones_intro(inputs)
	if (locale === "it") return it_profile_achievements_milestones_intro(inputs)
	if (locale === "nl") return nl_profile_achievements_milestones_intro(inputs)
	if (locale === "pl") return pl_profile_achievements_milestones_intro(inputs)
	if (locale === "pt") return pt_profile_achievements_milestones_intro(inputs)
	if (locale === "ru") return ru_profile_achievements_milestones_intro(inputs)
	if (locale === "sv") return sv_profile_achievements_milestones_intro(inputs)
	if (locale === "tr") return tr_profile_achievements_milestones_intro(inputs)
	if (locale === "zh") return zh_profile_achievements_milestones_intro(inputs)
	if (locale === "ja") return ja_profile_achievements_milestones_intro(inputs)
	return en_profile_achievements_milestones_intro(inputs)
});

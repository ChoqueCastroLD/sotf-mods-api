/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Badges_IntroInputs */

const en_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges fill each survivor’s field notebook. Locked ones show as dashed outlines with a hint, so you always know what’s next.`)
};

const es_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las insignias llenan el cuaderno de campo de cada superviviente. Las bloqueadas se ven con el contorno punteado y una pista, para que siempre sepas qué viene después.`)
};

const de_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abzeichen füllen das Feldtagebuch jedes Überlebenden. Gesperrte erscheinen gestrichelt mit einem Hinweis, damit du immer weißt, was als Nächstes kommt.`)
};

const fr_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les badges remplissent le carnet de terrain de chaque survivant. Ceux qui sont verrouillés apparaissent en pointillés avec un indice, pour savoir ce qui vient ensuite.`)
};

const it_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I distintivi riempiono il taccuino da campo di ogni sopravvissuto. Quelli bloccati appaiono tratteggiati con un indizio, così sai sempre cosa viene dopo.`)
};

const nl_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges vullen het veldnotitieboek van elke overlevende. Vergrendelde badges verschijnen gestippeld met een hint, zodat je altijd weet wat er nog komt.`)
};

const pl_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki wypełniają dziennik terenowy każdego ocalałego. Zablokowane widać jako przerywany kontur z podpowiedzią, więc zawsze wiesz, co dalej.`)
};

const pt_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As insígnias preenchem o caderno de campo de cada sobrevivente. As bloqueadas aparecem tracejadas com uma dica, para você sempre saber o que vem depois.`)
};

const ru_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки заполняют полевой дневник каждого выжившего. Закрытые показаны пунктиром с подсказкой, чтобы вы всегда знали, что дальше.`)
};

const sv_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken fyller varje överlevares fältdagbok. Låsta märken visas streckade med en ledtråd, så att du alltid vet vad som väntar.`)
};

const tr_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler her hayatta kalanın saha defterini doldurur. Kilitli olanlar bir ipucuyla kesikli çizgili görünür; böylece sırada ne olduğunu hep bilirsin.`)
};

const zh_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`徽章会填满每位幸存者的野外笔记。未解锁的徽章以虚线显示并附提示，让你随时知道下一步。`)
};

const ja_profile_achievements_badges_intro = /** @type {(inputs: Profile_Achievements_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジは各サバイバーのフィールドノートを埋めていきます。未獲得のバッジはヒント付きの点線で表示されるので、次の目標がいつでもわかります。`)
};

/**
* | output |
* | --- |
* | "Badges fill each survivor’s field notebook. Locked ones show as dashed outlines with a hint, so you always know what’s next." |
*
* @param {Profile_Achievements_Badges_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_badges_intro = /** @type {((inputs?: Profile_Achievements_Badges_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Badges_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_badges_intro(inputs)
	if (locale === "de") return de_profile_achievements_badges_intro(inputs)
	if (locale === "fr") return fr_profile_achievements_badges_intro(inputs)
	if (locale === "it") return it_profile_achievements_badges_intro(inputs)
	if (locale === "nl") return nl_profile_achievements_badges_intro(inputs)
	if (locale === "pl") return pl_profile_achievements_badges_intro(inputs)
	if (locale === "pt") return pt_profile_achievements_badges_intro(inputs)
	if (locale === "ru") return ru_profile_achievements_badges_intro(inputs)
	if (locale === "sv") return sv_profile_achievements_badges_intro(inputs)
	if (locale === "tr") return tr_profile_achievements_badges_intro(inputs)
	if (locale === "zh") return zh_profile_achievements_badges_intro(inputs)
	if (locale === "ja") return ja_profile_achievements_badges_intro(inputs)
	return en_profile_achievements_badges_intro(inputs)
});

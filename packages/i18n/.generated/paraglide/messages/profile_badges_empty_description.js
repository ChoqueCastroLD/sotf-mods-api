/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badges_Empty_DescriptionInputs */

const en_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges are earned by publishing, reviewing, reporting compatibility and helping others. Locked ones show up here as dashed outlines.`)
};

const es_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las insignias se ganan publicando, reseñando, reportando compatibilidad y ayudando a otros. Las bloqueadas aparecen aquí con el contorno punteado.`)
};

const de_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abzeichen verdienst du durch Veröffentlichen, Bewerten, Kompatibilitätsberichte und Hilfe für andere. Gesperrte erscheinen hier gestrichelt.`)
};

const fr_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les badges s’obtiennent en publiant, en donnant des avis, en signalant la compatibilité et en aidant les autres. Ceux qui sont verrouillés apparaissent ici en pointillés.`)
};

const it_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I distintivi si ottengono pubblicando, recensendo, segnalando la compatibilità e aiutando gli altri. Quelli bloccati appaiono qui tratteggiati.`)
};

const nl_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges verdien je door te publiceren, reviews te schrijven, compatibiliteit te melden en anderen te helpen. Vergrendelde badges verschijnen hier gestippeld.`)
};

const pl_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki zdobywa się za publikowanie, recenzje, raporty zgodności i pomoc innym. Zablokowane widać tu jako przerywany kontur.`)
};

const pt_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias são conquistadas publicando, avaliando, relatando compatibilidade e ajudando outras pessoas. As bloqueadas aparecem aqui tracejadas.`)
};

const ru_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки выдаются за публикации, отзывы, отчёты о совместимости и помощь другим. Закрытые показаны здесь пунктиром.`)
};

const sv_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken tjänas in genom att publicera, recensera, rapportera kompatibilitet och hjälpa andra. Låsta märken syns här med streckad kontur.`)
};

const tr_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler yayınlayarak, inceleme yazarak, uyumluluk bildirerek ve başkalarına yardım ederek kazanılır. Kilitli olanlar burada kesikli çizgiyle görünür.`)
};

const zh_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布作品、撰写评价、报告兼容性和帮助他人都能获得徽章。未解锁的徽章会以虚线轮廓显示在这里。`)
};

const ja_profile_badges_empty_description = /** @type {(inputs: Profile_Badges_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジは、公開・レビュー・互換性レポート・ほかの人の手助けで獲得できます。未獲得のバッジは点線で表示されます。`)
};

/**
* | output |
* | --- |
* | "Badges are earned by publishing, reviewing, reporting compatibility and helping others. Locked ones show up here as dashed outlines." |
*
* @param {Profile_Badges_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badges_empty_description = /** @type {((inputs?: Profile_Badges_Empty_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_Empty_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badges_empty_description(inputs)
	if (locale === "de") return de_profile_badges_empty_description(inputs)
	if (locale === "fr") return fr_profile_badges_empty_description(inputs)
	if (locale === "it") return it_profile_badges_empty_description(inputs)
	if (locale === "nl") return nl_profile_badges_empty_description(inputs)
	if (locale === "pl") return pl_profile_badges_empty_description(inputs)
	if (locale === "pt") return pt_profile_badges_empty_description(inputs)
	if (locale === "ru") return ru_profile_badges_empty_description(inputs)
	if (locale === "sv") return sv_profile_badges_empty_description(inputs)
	if (locale === "tr") return tr_profile_badges_empty_description(inputs)
	if (locale === "zh") return zh_profile_badges_empty_description(inputs)
	if (locale === "ja") return ja_profile_badges_empty_description(inputs)
	return en_profile_badges_empty_description(inputs)
});

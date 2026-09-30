/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_Meta_DescriptionInputs */

const en_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The people behind Sons of the Forest mods and builds: downloads, followers, tiers and their best-known work. Follow a creator to hear about new releases.`)
};

const es_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las personas detrás de los mods y builds de Sons of the Forest: descargas, seguidores, niveles y sus trabajos más conocidos. Sigue a un creador para enterarte de sus novedades.`)
};

const de_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Menschen hinter den Mods und Builds für Sons of the Forest: Downloads, Follower, Stufen und ihre bekanntesten Werke. Folge Erstellern, um von neuen Veröffentlichungen zu erfahren.`)
};

const fr_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les personnes derrière les mods et builds de Sons of the Forest : téléchargements, abonnés, paliers et leurs créations les plus connues. Suivez un créateur pour être informé de ses nouveautés.`)
};

const it_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le persone dietro le mod e le build di Sons of the Forest: download, follower, livelli e i loro lavori più noti. Segui un creatore per sapere delle sue novità.`)
};

const nl_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mensen achter de mods en builds voor Sons of the Forest: downloads, volgers, niveaus en hun bekendste werk. Volg een maker om nieuwe releases niet te missen.`)
};

const pl_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ludzie stojący za modami i buildami do Sons of the Forest: pobrania, obserwujący, poziomy i najbardziej znane prace. Obserwuj twórcę, by dowiadywać się o nowych wydaniach.`)
};

const pt_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As pessoas por trás dos mods e builds de Sons of the Forest: downloads, seguidores, níveis e seus trabalhos mais conhecidos. Siga um criador para saber das novidades.`)
};

const ru_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Люди, которые делают моды и постройки для Sons of the Forest: скачивания, подписчики, уровни и самые известные работы. Подпишитесь на автора, чтобы узнавать о новых релизах.`)
};

const sv_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Människorna bakom moddarna och byggena till Sons of the Forest: nedladdningar, följare, nivåer och deras mest kända verk. Följ en skapare för att höra om nya släpp.`)
};

const tr_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest modlarının ve yapılarının arkasındaki kişiler: indirmeler, takipçiler, seviyeler ve en bilinen işleri. Yeni yayınlardan haberdar olmak için bir üreticiyi takip et.`)
};

const zh_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 模组和建筑背后的创作者：下载量、关注者、段位和代表作。关注创作者，第一时间获知新发布。`)
};

const ja_profile_creators_meta_description = /** @type {(inputs: Profile_Creators_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の MOD と建築を作る人たち：ダウンロード数、フォロワー、ティア、代表作。クリエイターをフォローして新作を見逃さないように。`)
};

/**
* | output |
* | --- |
* | "The people behind Sons of the Forest mods and builds: downloads, followers, tiers and their best-known work. Follow a creator to hear about new releases." |
*
* @param {Profile_Creators_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_meta_description = /** @type {((inputs?: Profile_Creators_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_meta_description(inputs)
	if (locale === "de") return de_profile_creators_meta_description(inputs)
	if (locale === "fr") return fr_profile_creators_meta_description(inputs)
	if (locale === "it") return it_profile_creators_meta_description(inputs)
	if (locale === "nl") return nl_profile_creators_meta_description(inputs)
	if (locale === "pl") return pl_profile_creators_meta_description(inputs)
	if (locale === "pt") return pt_profile_creators_meta_description(inputs)
	if (locale === "ru") return ru_profile_creators_meta_description(inputs)
	if (locale === "sv") return sv_profile_creators_meta_description(inputs)
	if (locale === "tr") return tr_profile_creators_meta_description(inputs)
	if (locale === "zh") return zh_profile_creators_meta_description(inputs)
	if (locale === "ja") return ja_profile_creators_meta_description(inputs)
	return en_profile_creators_meta_description(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_DescriptionInputs */

const en_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest modpacks made by the community. Download one and SotF Mods Manager installs every mod in it.`)
};

const es_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks de Sons of the Forest creados por la comunidad. Descarga uno y SotF Mods Manager instala todos sus mods.`)
};

const de_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks für Sons of the Forest aus der Community. Lade eines herunter und SotF Mods Manager installiert alle enthaltenen Mods.`)
};

const fr_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des modpacks Sons of the Forest créés par la communauté. Téléchargez-en un et SotF Mods Manager installe tous ses mods.`)
};

const it_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack di Sons of the Forest creati dalla community. Scaricane uno e SotF Mods Manager installa tutte le sue mod.`)
};

const nl_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks voor Sons of the Forest, gemaakt door de community. Download er een en SotF Mods Manager installeert alle mods erin.`)
};

const pl_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacki do Sons of the Forest tworzone przez społeczność. Pobierz jeden, a SotF Mods Manager zainstaluje wszystkie jego mody.`)
};

const pt_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks de Sons of the Forest criados pela comunidade. Baixe um e o SotF Mods Manager instala todos os mods dele.`)
};

const ru_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпаки для Sons of the Forest от сообщества. Скачайте модпак, и SotF Mods Manager установит все его моды.`)
};

const sv_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaket för Sons of the Forest skapade av communityn. Ladda ner ett och SotF Mods Manager installerar alla dess moddar.`)
};

const tr_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluğun hazırladığı Sons of the Forest mod paketleri. Birini indir, SotF Mods Manager içindeki tüm modları kursun.`)
};

const zh_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`社区制作的《森林之子》整合包。下载一个，SotF Mods Manager 就会安装其中的所有模组。`)
};

const ja_modpacks_description = /** @type {(inputs: Modpacks_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティが作った Sons of the Forest の Modパック。ダウンロードすると SotF Mods Manager が中の Mod をすべてインストールします。`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest modpacks made by the community. Download one and SotF Mods Manager installs every mod in it." |
*
* @param {Modpacks_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_description = /** @type {((inputs?: Modpacks_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_description(inputs)
	if (locale === "de") return de_modpacks_description(inputs)
	if (locale === "fr") return fr_modpacks_description(inputs)
	if (locale === "it") return it_modpacks_description(inputs)
	if (locale === "nl") return nl_modpacks_description(inputs)
	if (locale === "pl") return pl_modpacks_description(inputs)
	if (locale === "pt") return pt_modpacks_description(inputs)
	if (locale === "ru") return ru_modpacks_description(inputs)
	if (locale === "sv") return sv_modpacks_description(inputs)
	if (locale === "tr") return tr_modpacks_description(inputs)
	if (locale === "zh") return zh_modpacks_description(inputs)
	if (locale === "ja") return ja_modpacks_description(inputs)
	return en_modpacks_description(inputs)
});

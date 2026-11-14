/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Meta_DescriptionInputs */

const en_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free mod manager for Sons of the Forest. Install mods and modpacks from SOTF Mods in one click, keep them updated and switch between profiles.`)
};

const es_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestor de mods gratuito para Sons of the Forest. Instala mods y modpacks de SOTF Mods con un clic, mantenlos actualizados y cambia entre perfiles.`)
};

const de_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kostenloser Mod-Manager für Sons of the Forest. Installiere Mods und Modpacks von SOTF Mods mit einem Klick, halte sie aktuell und wechsle zwischen Profilen.`)
};

const fr_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestionnaire de mods gratuit pour Sons of the Forest. Installez mods et modpacks de SOTF Mods en un clic, gardez-les à jour et changez de profil.`)
};

const it_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestore di mod gratuito per Sons of the Forest. Installa mod e modpack di SOTF Mods con un clic, tienili aggiornati e cambia profilo.`)
};

const nl_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis modmanager voor Sons of the Forest. Installeer mods en modpacks van SOTF Mods met één klik, houd ze up-to-date en wissel van profiel.`)
};

const pl_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Darmowy menedżer modów do Sons of the Forest. Instaluj mody i modpacki z SOTF Mods jednym kliknięciem, aktualizuj je i przełączaj profile.`)
};

const pt_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerenciador de mods gratuito para Sons of the Forest. Instale mods e modpacks do SOTF Mods com um clique, mantenha-os atualizados e troque de perfil.`)
};

const ru_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бесплатный менеджер модов для Sons of the Forest. Устанавливайте моды и модпаки с SOTF Mods в один клик, обновляйте их и переключайте профили.`)
};

const sv_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis moddhanterare för Sons of the Forest. Installera moddar och modpaket från SOTF Mods med ett klick, håll dem uppdaterade och byt profil.`)
};

const tr_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest için ücretsiz mod yöneticisi. SOTF Mods'tan modları ve mod paketlerini tek tıkla kur, güncel tut ve profil değiştir.`)
};

const zh_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`免费的《森林之子》模组管理器。一键安装 SOTF Mods 上的模组和整合包，保持更新并切换配置。`)
};

const ja_manager_meta_description = /** @type {(inputs: Manager_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 用の無料 Mod マネージャー。SOTF Mods の Mod と Modパックをワンクリックでインストールし、最新に保ち、プロファイルを切り替えられます。`)
};

/**
* | output |
* | --- |
* | "Free mod manager for Sons of the Forest. Install mods and modpacks from SOTF Mods in one click, keep them updated and switch between profiles." |
*
* @param {Manager_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_meta_description = /** @type {((inputs?: Manager_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_meta_description(inputs)
	if (locale === "de") return de_manager_meta_description(inputs)
	if (locale === "fr") return fr_manager_meta_description(inputs)
	if (locale === "it") return it_manager_meta_description(inputs)
	if (locale === "nl") return nl_manager_meta_description(inputs)
	if (locale === "pl") return pl_manager_meta_description(inputs)
	if (locale === "pt") return pt_manager_meta_description(inputs)
	if (locale === "ru") return ru_manager_meta_description(inputs)
	if (locale === "sv") return sv_manager_meta_description(inputs)
	if (locale === "tr") return tr_manager_meta_description(inputs)
	if (locale === "zh") return zh_manager_meta_description(inputs)
	if (locale === "ja") return ja_manager_meta_description(inputs)
	return en_manager_meta_description(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_LeadInputs */

const en_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install any mod from SOTF Mods in one click, get whole modpacks, keep everything updated and switch between mod profiles. It also installs RedLoader for you.`)
};

const es_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala cualquier mod de SOTF Mods con un clic, consigue modpacks completos, mantén todo actualizado y cambia entre perfiles de mods. También instala RedLoader por ti.`)
};

const de_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installiere jeden Mod von SOTF Mods mit einem Klick, hol dir ganze Modpacks, halte alles aktuell und wechsle zwischen Mod-Profilen. RedLoader installiert er auch für dich.`)
};

const fr_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installez n’importe quel mod de SOTF Mods en un clic, récupérez des modpacks entiers, gardez tout à jour et passez d’un profil de mods à l’autre. Il installe aussi RedLoader pour vous.`)
};

const it_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa qualsiasi mod di SOTF Mods con un clic, scarica modpack interi, tieni tutto aggiornato e passa da un profilo di mod all’altro. Installa anche RedLoader per te.`)
};

const nl_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer elke mod van SOTF Mods met één klik, haal complete modpacks binnen, houd alles up-to-date en wissel tussen modprofielen. Hij installeert ook RedLoader voor je.`)
};

const pl_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instaluj dowolny mod z SOTF Mods jednym kliknięciem, pobieraj całe modpacki, aktualizuj wszystko i przełączaj się między profilami modów. Zainstaluje też za ciebie RedLoader.`)
};

const pt_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale qualquer mod do SOTF Mods com um clique, baixe modpacks inteiros, mantenha tudo atualizado e alterne entre perfis de mods. Ele também instala o RedLoader para você.`)
};

const ru_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Устанавливайте любой мод с SOTF Mods в один клик, скачивайте целые модпаки, держите всё в актуальном состоянии и переключайтесь между профилями модов. RedLoader он тоже установит за вас.`)
};

const sv_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera vilken modd som helst från SOTF Mods med ett klick, hämta hela modpaket, håll allt uppdaterat och växla mellan moddprofiler. Den installerar också RedLoader åt dig.`)
};

const tr_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods'taki her modu tek tıkla kur, mod paketlerini toplu indir, her şeyi güncel tut ve mod profilleri arasında geçiş yap. RedLoader'ı da senin için kurar.`)
};

const zh_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一键安装 SOTF Mods 上的任何模组，获取完整整合包，保持一切最新，并在模组配置之间切换。它还会帮你安装 RedLoader。`)
};

const ja_manager_lead = /** @type {(inputs: Manager_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods の Mod をワンクリックでインストールし、Modパックをまるごと入手し、すべてを最新に保ち、Mod プロファイルを切り替えられます。RedLoader のインストールも任せられます。`)
};

/**
* | output |
* | --- |
* | "Install any mod from SOTF Mods in one click, get whole modpacks, keep everything updated and switch between mod profiles. It also installs RedLoader for you." |
*
* @param {Manager_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_lead = /** @type {((inputs?: Manager_LeadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_LeadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_lead(inputs)
	if (locale === "de") return de_manager_lead(inputs)
	if (locale === "fr") return fr_manager_lead(inputs)
	if (locale === "it") return it_manager_lead(inputs)
	if (locale === "nl") return nl_manager_lead(inputs)
	if (locale === "pl") return pl_manager_lead(inputs)
	if (locale === "pt") return pt_manager_lead(inputs)
	if (locale === "ru") return ru_manager_lead(inputs)
	if (locale === "sv") return sv_manager_lead(inputs)
	if (locale === "tr") return tr_manager_lead(inputs)
	if (locale === "zh") return zh_manager_lead(inputs)
	if (locale === "ja") return ja_manager_lead(inputs)
	return en_manager_lead(inputs)
});

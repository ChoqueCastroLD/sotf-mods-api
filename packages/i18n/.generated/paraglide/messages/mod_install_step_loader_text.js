/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Loader_TextInputs */

const en_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader is the mod loader for Sons of the Forest. You only need to install it once.`)
};

const es_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader es el cargador de mods de Sons of the Forest. Solo hay que instalarlo una vez.`)
};

const de_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader ist der Mod-Loader für Sons of the Forest. Du musst ihn nur einmal installieren.`)
};

const fr_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader est le chargeur de mods de Sons of the Forest. Il suffit de l’installer une seule fois.`)
};

const it_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader è il caricatore di mod di Sons of the Forest. Basta installarlo una volta.`)
};

const nl_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader is de modloader van Sons of the Forest. Je hoeft hem maar één keer te installeren.`)
};

const pl_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader to loader modów do Sons of the Forest. Wystarczy zainstalować go raz.`)
};

const pt_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O RedLoader é o carregador de mods de Sons of the Forest. Você só precisa instalá-lo uma vez.`)
};

const ru_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузчик модов для Sons of the Forest называется RedLoader. Его нужно установить только один раз.`)
};

const sv_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader är modladdaren för Sons of the Forest. Du behöver bara installera den en gång.`)
};

const tr_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader, Sons of the Forest’ın mod yükleyicisidir. Yalnızca bir kez kurman yeterli.`)
};

const zh_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader 是 Sons of the Forest 的模组加载器，只需安装一次。`)
};

const ja_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader は Sons of the Forest の MOD ローダーです。インストールは一度だけで済みます。`)
};

/**
* | output |
* | --- |
* | "RedLoader is the mod loader for Sons of the Forest. You only need to install it once." |
*
* @param {Mod_Install_Step_Loader_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_loader_text = /** @type {((inputs?: Mod_Install_Step_Loader_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Loader_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_loader_text(inputs)
	if (locale === "de") return de_mod_install_step_loader_text(inputs)
	if (locale === "fr") return fr_mod_install_step_loader_text(inputs)
	if (locale === "it") return it_mod_install_step_loader_text(inputs)
	if (locale === "nl") return nl_mod_install_step_loader_text(inputs)
	if (locale === "pl") return pl_mod_install_step_loader_text(inputs)
	if (locale === "pt") return pt_mod_install_step_loader_text(inputs)
	if (locale === "ru") return ru_mod_install_step_loader_text(inputs)
	if (locale === "sv") return sv_mod_install_step_loader_text(inputs)
	if (locale === "tr") return tr_mod_install_step_loader_text(inputs)
	if (locale === "zh") return zh_mod_install_step_loader_text(inputs)
	if (locale === "ja") return ja_mod_install_step_loader_text(inputs)
	return en_mod_install_step_loader_text(inputs)
});
